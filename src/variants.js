export const delayVariant = {
    initial: {
        x: '100vw',
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1
    },
    exit: {
        x: '-100vw',
        opacity: 0
    },
    transition: {
        duration: .3,
        type: 'spring', stiffness: 5
    }
}

export const spinVariant = {
   rotate: {
       rotate: 720,
       transition: {
           duration: .3,
       }
   },
   out: {
    rotate: 720,
    transition: {
        duration: .3,
    }
   }
}