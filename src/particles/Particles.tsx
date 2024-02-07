import Particles, { initParticlesEngine } from "@tsparticles/react";
import style from './Particles.module.scss'
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticlesComp = () => {
        return (
            <Particles
                options={{
                    fullScreen: {
                        enable: false,
                        zIndex: 0
                    },
                    particles: {
                        number: {
                            value: 200,
                            density: {
                                enable: true,
                            }
                        },
                        color: {
                            value: "#ffffff"
                        },
                        shape: {
                            type: "circle",
                        },
                        opacity: {
                            value: 1,
                        },
                        size: {
                            value: 30,
                        },
                        links: {
                            enable: false
                        },
                        move: {
                            enable: true,
                            speed: 3,
                            direction: "none",
                            random: false,
                            straight: false,

                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onHover: {
                                enable: true,
                                mode: "bubble",
                                parallax: {
                                    enable: false,
                                    force: 60,
                                    smooth: 10
                                }
                            },
                            onClick: {
                                enable: true,
                                mode: "push"
                            },
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                lineLinked: {
                                    opacity: 1
                                }
                            },
                            bubble: {
                                distance: 400,
                                size: 100,
                                duration: 2,
                                opacity: 1,
                                speed: 2
                            },
                            repulse: {
                                distance: 200
                            },
                            push: {
                                particles_nb: 4
                            },
                        }
                    },
                    detectRetina: true,
                    fpsLimit: 60,
                }}
            />
        );

};
export default ParticlesComp;
