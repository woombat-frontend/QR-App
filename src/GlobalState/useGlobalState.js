import { useState } from 'react'

// El estado general es este objeto. Se recomienda mantener esta estructura como contenedor de arrays, strings, otros objetos...etc
const State = {
    menu_option: "Inicio",
    admin_menu_option: 'Inicio',
    set_role: '',
    fireInit: null,
    personal_info: { name: "", points: null, email: "", uid: "" },
    showLogin: true,
    final_amount: null
}

const useGlobalState = () => {
    const [state, setState] = useState(State)

    const actions = action => {
        const { type, payload } = action

        switch (type) {
            case "setState": {
                return setState(payload)
            }
        }
    }
    return { state, actions }
}

export default useGlobalState