export default {
getcena: async () => {
    
    const cena = await cena_zapytaj.run();
    return cena
    }
}