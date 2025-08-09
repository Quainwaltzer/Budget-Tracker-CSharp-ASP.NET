(function () {
    const {
        animate,
        createTimeline,
        createTimer,
        stagger,
        onScroll,
        text
    } = anime;

    window.myAnimations = {
        runAll: () => {

            animate(".sidebar li", {
                duration: 1000,
                translateX: [-100, 0],
                delay: stagger(500),
                ease: 'outQuad',
                opacity: [0, 1]
            });

            const home = document.querySelector('.home-container');
            animate(home, {
                duration: 1000,
                opacity: [0,1],
                ease: 'inOutQuad',
            });
        }
    };

    window.introAnimations = {
        runAll: () => {

            const money2 = document.querySelector(".parallax")
            animate(money2, {
                y: -200,
                duration: 1000,
                ease: "cubicBezier(0.68, 0.32, 0.37, 0.98)",
                autoplay: onScroll({
                    target: money2,
                    enter: "center+=100 center",
                    leave: "center bottom",
                    sync: 0.25,
                    debug: false
                })
            });

            animate('.stationary', {
                y: -600,
                duration: 1000,
                ease: "cubicBezier(0.68, 0.32, 0.37, 0.98)",
                autoplay: onScroll({
                    target: '.parallax',
                    enter: "center+=100 center",
                    leave: "center bottom",
                    sync: 0.25,
                    debug: false,

                })
            });

            const testing = text.split('.intro-container h1', { chars: { wrap: false } });
            const heya = testing.chars;
            animate(heya, {
                delay: stagger(200),
                duration: 1500,
                ease: 'outQuad',
                y: [20, 0]
            });
        }

    };

    window.headerAnimation = {
        runAll: () => {
            console.log('This is called');

            const secondSection = document.querySelector('.about');
            const header = document.querySelector('header');

            animate('header nav', {
                duration: 1000,
                width: '100%',
                marginTop: '0px',
                borderRadius: '0px',
                background: 'rgba(255,255,255,0.5)',
                ease: 'outQuad',
                autoplay: onScroll({
                    target: secondSection,
                    enter: "bottom-=50 top",
                    leave: "bottom-=100 top+=300",
                    sync: 0.5,
                    debug: false,
                })
            });

            animate(header, {
                duration: 1000,
                padding: '0px',
                ease: 'outQuad',
                autoplay: onScroll({
                    target: secondSection,
                    enter: "bottom-=50 top",
                    leave: "bottom-=100 top+=300",
                    sync: 0.5,
                    debug: false,
                })
            });
        },

        hideHeader: () => {
            
            const header = document.querySelector('header');
            animate(header, {
                duration: 1500,
                translateY: [0, -200],
                ease: 'outQuad',
            });
        },

        rerender: () => {
            const header = document.querySelector('header');
            animate(header, {
                duration: 1500,
                opacity: [0, 0, 0, 1],
                translateY: [-200, 0],
                ease: 'inOutQuad',
            });
        },

        hideMain: () => {
            const main = document.querySelector('main');
            animate(main, {
                duration: 500,
                opacity: [1,0],
                ease: 'inOutQuad',
            });
        },
    };

    window.setupBeforeUnload = () => {
        window.addEventListener('popstate', function (event) {
            // Your cleanup logic here
            console.log('Page is unloading');

            // Uncomment to show confirmation dialog:
             event.preventDefault();
            event.returnValue = '';

            location.reload();
        });
    };
})();

