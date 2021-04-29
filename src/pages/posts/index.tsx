import Head from 'next/head';
import React from 'react';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
        <Head>
            <title>Posts | Ignews</title>
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                <a href="">
                    <time>29 de janeiro de 2021</time>
                    <strong>Lorem Ipsum</strong>
                    <p>eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                </a>

                <a href="">
                    <time>29 de janeiro de 2021</time>
                    <strong>Lorem Ipsum</strong>
                    <p>eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                </a>

                <a href="">
                    <time>29 de janeiro de 2021</time>
                    <strong>Lorem Ipsum</strong>
                    <p>eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                </a>

            </div>
        </main>
        </>
    );
}