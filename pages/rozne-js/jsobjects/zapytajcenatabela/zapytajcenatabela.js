export default {
storeProductIndex: (index) => {
storeValue('productIndex', indeks);
},

fetchProductPrice: async () => {
const index = appsmith.store.productIndex;
// Assuming you have an API that fetches price based on index
const response = await cena_zapytaj.run({index: index});
return response.data.cenakatalogowa;
}
}