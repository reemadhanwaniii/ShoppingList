import { toast } from "react-toastify";

export function showSuccess(message) {
    toast.success(message, {
        position: "top-right",
    })
}

export function showError(message) {
    toast.error(message, {
        position: toast.POSITION.TOP_RIGHT
    })
}
