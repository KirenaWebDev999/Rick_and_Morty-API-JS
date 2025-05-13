import {HomePage} from "./pages/HomePage/HomePage.jsx";
import {LocationPage} from "./pages/LocationPage/LocationPage.jsx";
import {EpisodePage} from "./pages/EpisodePage/EpisodePage.jsx";
import {CharacterPage} from "./pages/CharacterPage/CharacterPage.jsx";
import {Header} from "./common/components/Header.jsx";


function App() {
    return (
        <div>
            <Header/>
            <HomePage/>
            <CharacterPage/>
            <LocationPage/>
            <EpisodePage/>
        </div>
    )
}

export default App
