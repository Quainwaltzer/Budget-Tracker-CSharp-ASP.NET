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

            const home = document.querySelector('.home-container');
            animate(home, {
                duration: 1000,
                opacity: [0, 1],
                ease: 'inOutQuad',
            });


            animate("li", {
                duration: 1000,
                translateX: [-100, 0],
                delay: stagger(500),
                ease: 'outQuad',
                opacity: [0, 1]
            });

           
            animateSectionHeaders({
                header: '.add-header',
                lines: '.add-header .line',
                targets: '.add-budget'
            });

            animateSectionHeaders({
                header: '.charts-header',
                lines: '.charts-header .line',
                targets: '.see-data'
            });

            function animateSectionHeaders({ header, lines, targets}) {
                animate(header, {
                    translateY: [20, 0],
                    opacity: [0, 1],
                    duration: 1000,
                    ease: 'outQuad',
                    autoplay: onScroll({
                        target: targets,
                        container: '.main-container',
                        enter: 'center center-=50',
                        leave: 'center center+=50',
                        sync: 'play reset play reset',
                        debug: false
                    })
                });

                animate(lines, {
                    width: ['0%', '100%'],
                    duration: 1500,
                    delay: 1000,
                    ease: 'outQuad',
                    autoplay: onScroll({
                        target: targets,
                        container: '.main-container',
                        enter: 'center center-=50',
                        leave: 'center center+=50',
                        sync: 'play reset play reset',
                        debug: false
                    })
                });
            }
            
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

    window.lockScroll = () => {
        window.addEventListener('load', () => {
            const firstSection = document.querySelector('.add-budget');
            if (firstSection) {
                firstSection.scrollIntoView({ behavior: 'smooth' }); 
            }
        });

        window.addEventListener('wheel', (e) => {
            e.preventDefault(); 
        }, { passive: false });
    };

    window.See = () => {
        console.log("I was here");
            const see = document.querySelector('.see-data');
            if (see) {
                see.scrollIntoView({ behavior: 'smooth' });
            }
    };

    window.Add = () => {
        console.log("I was here");

            const add = document.querySelector('.add-budget');
        if (add) {
            add.scrollIntoView({ behavior: 'smooth' });
        }
    };

    window.Testing = () => {

        const testing = document.querySelector('.testing');
        testing.scrollIntoView({ behavior: 'smooth' });

    };

    window.Data = () => {

        const data = document.querySelector('.data-container');
        data.scrollIntoView({ behavior: 'smooth' });

    };

    window.loadHighchartsItem = (items, amounting) => {
        console.log('testing');
        Highcharts.chart('chart-container', {
            chart: { type: 'line' },
            xAxis: { categories: items },
            title: { text: 'Testing lang' },
            series: [{
                name: 'Amounts for the specific item',
                data: amounting
            }]

        });
    }

})();

