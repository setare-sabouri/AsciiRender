// this is a light placeholder for object under suspence - just to show user sth will pop up here

const PlaceHolder = (props) => {
    return (
        <mesh {...props}>
            <boxGeometry args={[1, 1, 1, 1, 1, 1]} />
            <meshBasicMaterial color="red" wireframe />
        </mesh>
    )
}

export default PlaceHolder