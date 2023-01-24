import React, { Component, useEffect, useRef, useState } from 'react'
import { Engine, Render, Bodies, World } from 'matter-js'

type Props ={
  ref: any
}

const MatterHeader = (props: Props) => {
  const scene = useRef()
  const contentRef = useRef(null)
  const isPressed = useRef(false)
  const engine = useRef(Engine.create())

  const [width, setWidth] = useState(0)



  useEffect(() => {
    // function handleResize() {
    //   // if (window.matchMedia("(min-width: 1436px)")) {
    //   //   setWidth(1436)
    //   // } else if (window.matchMedia("(min-width: 960px)")) {
    //   //   setWidth(960)
    //   // } else if (window.matchMedia("(min-width: 704px)")) {
    //   //   setWidth(704)
    //   // } else if (window.matchMedia("(min-width: 416px)")) {
    //   //   setWidth(416)
    //   // } else{
    //   //   setWidth(document.body.clientWidth)
    //   // }
    //   setWidth(props.ref.clientWidth)
    //   console.log(width)
    // }
    // handleResize()
    // window.addEventListener('resize', handleResize)

    const cw = document.body.clientWidth
    const ch = document.body.clientHeight / 10

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: 'transparent'
      }
    })

    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true })
    ])

    Engine.run(engine.current)
    Render.run(render)

    return () => {
      Render.stop(render)
      Render.setPixelRatio(render, 'auto')
      World.clear(engine.current.world)
      Engine.clear(engine.current)
      render.canvas.remove()
      render.canvas = null
      render.context = null
      render.textures = {}
    }
  }, [props.ref])

  const handleDown = () => {
    isPressed.current = true
  }

  const handleUp = () => {
    isPressed.current = false
  }

  const handleAddCircle = e => {
    if (isPressed.current) {
      const ball = Bodies.rectangle(
        e.clientX,
        e.clientY,
        51.2, 51.2,
        {
          mass: 10,
          restitution: 0.9,
          friction: 0.005,
          render: {
            fillStyle: '#0000ff',
            sprite: {
              texture: '/images/flag.png',
              xScale: .1,
              yScale: .1,
            }
          }
        })
      World.add(engine.current.world, [ball])
    }
  }

  return (
    <div
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onMouseMove={handleAddCircle}
    >
      <div ref={scene} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default MatterHeader;