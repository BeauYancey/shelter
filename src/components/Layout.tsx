import Header from "./Header"
import Footer from "./Footer"

export default function Layout ({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
                <main style={{ padding: '15rem 3rem' }}>
                    {children}
                </main>
            <Footer />
        </>
    )
}