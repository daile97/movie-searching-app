import Header from '../components/header/Header'
import './global.css'

export default function RootLayout({ children }) {
    return (
        <html>
            <head />
            <body>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    )
}
