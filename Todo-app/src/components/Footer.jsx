export const Footer = () => {
    return (<>
        <footer className="mt-20">
            <p className="text-center text-sm font-medium text-gray-800">
                &copy; {new Date().getFullYear()}, Created by <a href="https://codewithabubakar.netlify.app/" target="_blank">CodeWithAbubakar.com</a>
            </p>
        </footer>
    </>)
}