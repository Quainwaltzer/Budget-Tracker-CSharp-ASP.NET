window.myAnimations = {
    runAll: () => {
        const {
            animate,
            createTimeline,
            createTimer,
            stagger
        } = anime;

        animate(".sidebar li", {
            duration: 1000,
            translateX: [-100, 0],
            delay: stagger(500),
            ease: 'outQuad',
            opacity: [0, 1]
        });
    }
};

window.introAnimations = {
    runAll: () => {
        const {
            animate,
            createTimeline,
            createTimer,
            stagger,
            onScroll
        } = anime;

        const money2 = document.querySelector(".parallax")
        animate(money2, {
            y: -400  ,
            duration: 1000,
            ease: "cubicBezier(0.68, 0.32, 0.37, 0.98)",
            autoplay: onScroll({
                target: money2,
                enter: "center+=100 top",
                leave: "center bottom",
                sync: 0.25,
                debug: true
            })
        });

        animate('.stationary', {
            y: -700,
            duration: 1000,
            ease: "cubicBezier(0.68, 0.32, 0.37, 0.98)",
            autoplay: onScroll({
                enter: "center+=100 top",
                leave: "center bottom",
                sync: 0.25,
                debug: true,

            })
        });
    }


};