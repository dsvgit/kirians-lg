import customAxios from 'src/app/framework/customAxios';
import { getUrl } from 'src/app/framework/url';

export function fetchCategories() {
  // return customAxios.get(getUrl('search_error_list_category.php'));
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          "id": "244",
          "name": "Бытовые кондиционеры"
        },
        {
          "id": "245",
          "name": "Полупромышленные кондиционеры"
        },
        {
          "id": "246",
          "name": "Мульти сплит-системы"
        },
        {
          "id": "247",
          "name": "Мультизональные системы"
        }
      ]);
    }, 250)
  });
}
