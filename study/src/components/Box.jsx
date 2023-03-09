

const  Box= (props) => {


    return ( 
        <div className="box">
            <h1>{props.title}</h1>
            <img className="item-img" src="https://masflex.com.ph/wp-content/uploads/2020/09/HI-426.png" alt="" />
            <h2>Win</h2>
        </div>
    );
}

export default Box;