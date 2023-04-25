import './ItemListContainer.css'
// const props = {
//     greeting :'holaG',
//     // greeting2 :'chauG'
// }
//  let {greeting} = props;
// let props ="hola G"; 
const ItemListContainer = (props) => {
    return (
        <main>
            <h2><p>{props.greeting}</p></h2>
            <h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas nulla ipsa dolorem dolor delectus quam accusamus sunt rerum, voluptatum molestias, atque illum alias. Deserunt minima sint facilis, esse dolores ratione!</p></h3>
            <h4><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus officiis odio pariatur nesciunt facere necessitatibus dolorum, reprehenderit nulla dolor enim, esse sapiente blanditiis repellendus illo iusto cum dicta dolorem vel.</p></h4>
        </main>

    )
}

export default ItemListContainer 