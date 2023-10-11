import style from "./Form.module.css"
function Form(){
    return (<>
        <div className={style.create}>
        <form className={style.create} action="" onSubmit={(e) => { e.preventDefault }}>
            <label htmlFor="">
                Nombre:
            </label>
            <input type="text" placeholder="Ingresa el nombre"/>

            <label htmlFor="">
                Descripcion:
            </label>
            <input type="text"/>
            <button>
                Crear
            </button>
        </form>
        </div>
        </>);
}

export default Form;