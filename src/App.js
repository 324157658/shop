import React from "react"
import Header from "./components/Header"
import Footer from  "./components/Footer"
import Items from  "./components/Items"
import Categories from "./components/Categories"
import { ShowFullItem } from "./components/ShowFullItem"

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        orders:[],
        currentItems:[],
        items: [
        {
        id: 1,
        title: 'Мир как воля и представление',
        img: 'The World as Will and Representation.jpg',
        desc: 'Артур Шопенгауэр Мир как воля и представление',
        category: 'philosophy',
        price: '319'
        },
        {
        id: 2,
        title: '451 градус по Фаренгейту',
        img: 'fahrenheit.jpg',
        desc: 'Описание',
        category: 'artistic literature',
        price: '579'
        },
        {
        id: 3,
        title: 'чистый код',
        img: 'clean_code.png',
        desc: 'чистый код Роберт Мартин',
        category: 'programming',
        price: '1099'
        },
        {
        id: 4,
        title: 'происхождение видов',
        img: 'The origin of species.jpg',
        desc: 'происхождение видов Чарльз Дарвин',
        category: 'science',
        price: '329'
        }
        ],
        showFullItem: false,
        fullItem:{}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
}    
    render(){
        return(
            <div className="wrapper">
                <Header orders = {this.state.orders} onDelete = {this.deleteOrder}/>
                <Categories chooseCategory = {this.chooseCategory}/>                
                <Items onShowItem= {this.onShowItem}  items = {this.state.currentItems} onAdd= {this.addToOrder}/>
                {this.state.showFullItem && <ShowFullItem onAdd= {this.addToOrder} item = {this.state.fullItem} onShowItem= {this.onShowItem} />}
                <Footer />
            </div>
        )
    }

    onShowItem(item){
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.ShowFullItem})
      }
    

    chooseCategory(category){
        if(category === 'all'){
            this.setState({currentItems: this.state.items})
            return
        }
    
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category )
        })
      }
    deleteOrder(id){
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrder(item){
        let isInArray = false
        this.state.orders.forEach(el =>{
            if(el.id === item.id)
            isInArray = true
        })
        if(!isInArray)
    
        this.setState({orders: [...this.state.orders, item] })
        
      }
}

export default App;