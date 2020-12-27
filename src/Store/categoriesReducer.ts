// //Create action creators
const ADD_SYMBOL_CATEGORIES = 'inputReducer/ADD_SYMBOL_CATEGORIES'
const ADD_CATEGORY = 'inputReducer/ADD_CATEGORY'
const DELETE_CATEGORY = 'inputReducer/DELETE_CATEGORY'

type addSymbolCategoriesType = {
    type: typeof ADD_SYMBOL_CATEGORIES
    symbol: string
}
export const addSymbolCategories = (symbol: string): addSymbolCategoriesType => ({type: ADD_SYMBOL_CATEGORIES, symbol})
type addCategoryType = {
    type: typeof ADD_CATEGORY
}
export const addCategory = (): addCategoryType => ({type: ADD_CATEGORY})
type deleteCategoryType = {
    type: typeof DELETE_CATEGORY
    id: number
}
export const deleteCategory = (id: number): deleteCategoryType => ({type: DELETE_CATEGORY, id})
 type actionsType = addSymbolCategoriesType | addCategoryType | deleteCategoryType
//initial state
export type categoriesType = {
    id: number
    name: string
}
const initialState = {
    categoriesSymbols: '',
    categories: [
        {id: 1, name: 'work'},
        {id: 2, name: 'shopping'},
        {id: 3, name: 'entertainment'}
    ] as Array<categoriesType>
}

type InitialState = typeof initialState

//Create reducer
export const categoriesReducer = (state = initialState, action: actionsType): InitialState => {
    const stateCopy = {...state}
    switch (action.type) {
        case ADD_SYMBOL_CATEGORIES:
            return {
                ...state,
                categoriesSymbols: action.symbol
            }
        case ADD_CATEGORY:
            const newCategory = {
                id: state.categories[state.categories.length - 1].id + 1,
                name: state.categoriesSymbols,
            }
            return {
                ...state,
                categories: [...state.categories, newCategory],
                categoriesSymbols: ''
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: [...state.categories.filter(category => category.id !== action.id)]
            }
        default:
            return stateCopy
    }
}