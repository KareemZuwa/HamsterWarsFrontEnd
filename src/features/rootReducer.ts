import { combineReducers } from 'redux'


const rootReducer = combineReducers({
	// här lägger vi till reducers, allt eftesom vi behöver dem (precis som vi gör med komponenter)
})

/*
"Wireframe webshop"
Detta behöver vi lägga i appens store:
- produkter (lista)
- kundvagn
- användare, inloggningsstatus
- vilken sida (komponent) ska visas
Dessa variabler och interface behöver vi:
+ products: Product[]  (interface för produkter)
+ cart: CartItem[]
+ user: User
+ view: string
Webbshoppen ska ha några olika vyer:
- produktsida (visar alla produkter)
- kundvagn (visar bara kundvagnen)
- (man kan lägga till flera efter hand)
*/


export { rootReducer }