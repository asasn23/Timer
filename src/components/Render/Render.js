import styles from './Render.module.scss';
const Render = props => {
    const mstoTime = ms => {
        return new Date(ms).toISOString().slice(11, 23);
    }

    return (
        <div className={styles.title}>
            {mstoTime(props.time)}
        </div>
    );
}

export default Render;