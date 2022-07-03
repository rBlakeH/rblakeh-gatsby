import React, { useEffect, useRef, useState } from "react"
import { Body, Engine, Render, Bodies, World } from "matter-js"
import { css } from "@emotion/css"

const STATIC_DENSITY = 15

const MatterHeader = () => {
  const container = useRef(null)
  const canvas = useRef(null)

  const [isPressed, setPressed] = useState(false)
  const [engine, setEngine] = useState()
  const [constraints, setConstraints] = useState()
  const [scene, setScene] = useState()

  const handleResize = () => {
    setConstraints(container.current.getBoundingClientRect())
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  useEffect(() => {
    const engine = Engine.create({})
    setEngine(engine)

    const render = Render.create({
      element: container.current,
      canvas: canvas.current,
      engine: engine,
      options: {
        wireframes: false,
        background: "black",
      },
    })

    const floor = Bodies.rectangle(0, 0, 0, STATIC_DENSITY, {
      isStatic: true,
      render: {
        fillStyle: 'blue',
      },
    })

    World.add(engine.world, [floor])

    Engine.run(engine)
    Render.run(render)

    setConstraints(container.current.getBoundingClientRect())
    setScene(render)

    return () => {
      Render.stop(render)
      World.clear(engine.current.world)
      Engine.clear(engine.current)
      render.canvas.remove()
      render.canvas = null
      render.context = null
      render.textures = {}
    }
  }, [])

  useEffect(() => {
    if (constraints) {
      let { width, height } = constraints

      // Dynamically update canvas and bounds
      scene.bounds.max.x = width
      scene.bounds.max.y = height
      scene.options.width = width
      scene.options.height = height
      scene.canvas.width = width
      scene.canvas.height = height

      // Dynamically update floor
      const floor = scene.engine.world.bodies[0]

      Body.setPosition(floor, {
        x: width / 2,
        y: height + STATIC_DENSITY / 2,
      })

      Body.setVertices(floor, [
        { x: 0, y: height },
        { x: width, y: height },
        { x: width, y: height + STATIC_DENSITY },
        { x: 0, y: height + STATIC_DENSITY },
      ])
    }
  }, [scene, constraints])

  const handleDown = () => {
    setPressed(true)
  }

  const handleUp = () => {
    setPressed(false)
  }

  const handleAddCircle = e => {
    if (isPressed) {
      const ball = Bodies.circle(
        e.clientX,
        e.clientY,
        10 + Math.random() * 30,
        {
          mass: 10,
          restitution: 0.9,
          friction: 0.005,
          render: {
            fillStyle: "#0000ff",
          },
        }
      )
      World.add(engine.world, [ball])
    }
  }

  return (
    <div
      ref={container}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onMouseMove={handleAddCircle}
      css={css`
        width: 100%;
        height: 200px;
      `}
    >
      <canvas ref={canvas} />
    </div>
  )
}

export default MatterHeader
