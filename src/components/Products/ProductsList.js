import {v4 as uuid} from 'uuid';
import s from './ProductsList.module.css';
import DeleteButton from '../Widgets/RemoveItem';
import { SolidTitle } from '../Title/SolidTitle';
import {connect} from 'react-redux';
import {deleteProduct} from '../../redux/products/actions';

// Создаем компонент списка продуктов

// export function ProductList({products, onDeleteProduct}) {
//   return (
//     <>
//       <SolidTitle titleText="Product List"/>
//       {/* <h2>Product List</h2> */}
//       <ul>
//         {products.map((product) => {
//             return (
//               <li key={product.id} className={s.productItem}>
//                 <h3 className={s.productTitle}>{product.title}</h3>
//                 <p className={s.productDesc}>{product.desc}</p>
//                 <DeleteButton onDelete={onDeleteProduct} id={product.id}/>
//                 {/* Рендерим компонент окна с подтверждением удаления DeleteButton
//                 передаем через пропс метод удаления продукта и id */}
//               </li>
//             )
//           })
//         }
//       </ul>
//     </>
//   )
// }

function ProductList({products, onDeleteProduct}) {
    return (
      <>
        <SolidTitle titleText="Product List" />
        {/* <h2>Product List</h2> */}
        <ul>
          {products.map(product => {
            return (
              <li key={product.id} className={s.productItem}>
                <h3 className={s.productTitle}>{product.title}</h3>
                <p className={s.productDesc}>{product.description}</p>
                <DeleteButton 
                  //onDelete={onDeleteProduct} 
                  id={product.id}
                />
                {/* рендерим  компонент окна с подтверждением удаления DeleteButton */}
                {/* передаем через пропс метод удаления продукта и его id */}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
  
  const mapStateToProps = state => ({
    products: state.products,
  });

  // const mapDispatchToProps = dispatch => ({
  //   onDeleteProduct: (id) => dispatch(deleteProduct(id)),
  // })
  
  export default connect(mapStateToProps)(ProductList);