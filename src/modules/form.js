const form = () => {
    return `<div class="form-group mb-2">
                <div class="error-message" style="color: red; display: none;">Neteisingai ivestas pavadinimas</div>
                <input type="text" class="form-control term" placeholder="Filmo pavadinimas:">
            </div>
            <button type="submit" class="btn btn-primary mb-2">Ieskoti filmo</button>
            <div class="result"></div>
            `;
}
export default form;