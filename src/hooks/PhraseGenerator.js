import {init,sec,sec2,sec3,sec4,sec5} from '../Data/Data'
import {handleShuffle,handleMultiple} from './Shuffled'

export const PhraseGenerator = () => {
    let cont = [handleShuffle(sec5)];
    const have = () => {
        let gen = handleShuffle(sec5);
        if (!cont.find(el => el === gen)) {
            cont.push(gen);
        } else {
            have()
        }
    };
    let j = 2
    for (let i = 0; i < j; i++) {
        have()
    }
    return handleMultiple(init,sec,sec2,sec3,sec4) + cont.join() + "..."
}