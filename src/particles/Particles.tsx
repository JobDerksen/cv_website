import {FC, useEffect, useMemo} from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import styles from './Particles.module.scss'
import {
    type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

interface particleProps{
    init: boolean
}

const ParticlesComp:FC<particleProps> = ({init}) => {

    // this should be run only once per application lifetime hopefully untrue lol
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
        });
    }, [init]);


    const particlesLoaded = async (): Promise<void> => {};

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen:
                {
                    enable: false,
                },
            fpsLimit: 72,
            particles: {
                color: {
                    value: "#ffffff",
                },
                move: {
                    direction: 'right',
                    enable: true,
                    outModes: {
                        default: 'out',
                    },
                    random: true,
                    speed: 2,
                    straight: true,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 175,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: { min: 0.5, max: 15 },
                },
            },
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
                className={styles.tsparticles}
            />
        );
    }

    return <></>;
};

export default ParticlesComp;
