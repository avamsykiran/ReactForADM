const Header = (props) =>(
    <header className="jumbotron">
        <h1>{props.title}</h1>
    </header>
);

Header.defaultProps = {
    title:"No Title Pased By Parent"
};

export default Header;