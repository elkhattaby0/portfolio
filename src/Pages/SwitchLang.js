import React from 'react';
import Arabic from "./Lang/Arabic.json"
import English from "./Lang/English.json"
import French from "./Lang/French.json"

const SwitchLang = ({ setLang }) => {
    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        switch (selectedLanguage) {
            case 'eng':
                setLang(English);
                break;
            case 'ar':
                setLang(Arabic);
                break;
            case 'fr':
                setLang(French);
                break;
            default:
                setLang(English);
        }
    };
    return (
        <select 
            className={switchStyle.selectOption}
            onChange={handleLanguageChange} 
        >
            <option value="eng">Eng</option>
            <option value="ar">Ar</option>
            <option value="fr">Fr</option>
        </select>
    )
}

    const switchStyle = {
        'selectOption' : "bg-transparent font-medium p-2 m-2 outline-0 cursor-pointer text-[12px]"
    }

export default SwitchLang;