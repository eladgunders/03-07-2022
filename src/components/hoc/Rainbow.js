const Rainbow = (WrappedComponent) => {
    const color = '#'+Math.floor(Math.random()*16777215).toString(16);
    return (props) => (
        <div style={{color}}>
            <WrappedComponent {...props} rainbow_color='yellow' />
        </div>)
}

export default Rainbow