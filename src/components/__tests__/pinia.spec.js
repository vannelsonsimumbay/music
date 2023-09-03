import { setActivePinia, createPinia } from "pinia";
import userUserStore from "@/stores/user"

vi.mock("@/includes/firebase", () => ({
    auth: {
        signInWithEmailAndPassword: () => Promise.resolve()
    }
}));


describe("stores", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    })

    test("authenticates user", async () => {
        const store = userUserStore()

        expect(store.userLoggedIn).not.toBe(true)
        store.authenticate({})
        expect(store.userLoggedIn).toBe(false)
    })
})