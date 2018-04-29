const template = `
        <div class="section">
            <h2 class="is-size-5">Misc</h2>
            <div class="columns">
                <div class="column">
                    <div name="Skills" data-unique="Skills"></div><h3 id="skills">Skills</h3>
                    <table>
                        <tbody><tr>
                            <th>Ability Score</th>
                            <th>Associated Skills</th>
                        </tr>
                        <tr>
                            <td align="left">Strength</td>
                            <td align="left">Athletics</td>
                        </tr>
                        <tr>
                            <td align="left">Dexterity</td>
                            <td align="left">Acrobatics, Sleight of Hand, Stealth</td>
                        </tr>
                        <tr>
                            <td align="left">Constitution</td>
                            <td align="left">N/A (See <a href="#constitution">Con Table</a>)</td>
                        </tr>
                        <tr>
                            <td align="left">Intelligence</td>
                            <td align="left">Arcana, History, Investigation, Nature, Religion</td>
                        </tr>
                        <tr>
                            <td align="left">Wisdom</td>
                            <td align="left">Animal Handling, Insight, Medicine, Perception, Survival</td>
                        </tr>
                        <tr>
                            <td align="left">Charisma</td>
                            <td align="left">Deception, Intimidation, Performance, Persuasion</td>
                        </tr>
                    </tbody></table>
                </div>
                <div class="column">
                    <table id="cover">
                        <tbody><tr>
                            <th width="20%" align="left">Cover Type</th>
                            <th>Effect</th>
                        </tr>
                        <tr>
                            <td align="left">1/2 cover</td>
                            <td align="left">+2 bonus to AC and Dexterity saving throws against attacks and effects that originate on the opposite side of the cover.</td>
                        </tr>
                        <tr>
                            <td align="left">3/4 cover</td>
                            <td align="left">+5 bonus to AC and Dexterity saving throws against attacks and effects that originate on the opposite side of the cover.</td>
                        </tr>
                        <tr>
                            <td align="left">Full cover</td>
                            <td align="left">Can't be targeted by an attack or a spell.</td>
                        </tr>
                    </tbody></table>
                </div>
                <div class="column">
                <h2 class="is-size-5">Quick Find</h2>
                    <table>
                        <tbody><tr>
                            <th align="left">
                                d12
                            </th>
                            <th align="left">Find</th>
                        </tr>
                        <tr>
                            <td align="left">1</td>
                            <td align="left">Artwork</td>
                        </tr>
                        <tr>
                            <td align="left">2</td>
                            <td align="left">Body</td>
                        </tr>
                        <tr>
                            <td align="left">3</td>
                            <td align="left">Food or drink</td>
                        </tr>
                        <tr>
                            <td align="left">4</td>
                            <td align="left">Jewelry</td>
                        </tr>
                        <tr>
                            <td align="left">5</td>
                            <td align="left">Key</td>
                        </tr>
                        <tr>
                            <td align="left">6</td>
                            <td align="left">Letter</td>
                        </tr>
                        <tr>
                            <td align="left">7</td>
                            <td align="left">Magic herbs</td>
                        </tr>
                        <tr>
                            <td align="left">8</td>
                            <td align="left">Map</td>
                        </tr>
                        <tr>
                            <td align="left">9</td>
                            <td align="left">Monster parts</td>
                        </tr>
                        <tr>
                            <td align="left">10</td>
                            <td align="left">Secret message</td>
                        </tr>
                        <tr>
                            <td align="left">11</td>
                            <td align="left">Signet or insignia</td>
                        </tr>
                        <tr>
                            <td align="left">12</td>
                            <td align="left">Tome</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div class="column">
                    <div name="Food,Drink,andLodging" data-unique="Food,Drink,andLodging"></div><h3>Food, Drink, and Lodging</h3>
                    <table id="lodging">
                        <tbody><tr>
                            <th align="left">Item</th>
                            <th align="left">Cost</th>
                        </tr>
                        <tr>
                            <td align="left"><i>Ale</i></td>
                            <td align="left"></td>
                        </tr> 
                        <tr>
                            <td align="left">&nbsp;&nbsp;&nbsp;&nbsp;Gallon</td>
                            <td align="left">2 sp</td>
                        </tr>
                        <tr>
                            <td align="left">&nbsp;&nbsp;&nbsp;&nbsp;Mug</td>
                            <td align="left">4 cp</td>
                        </tr>
                        <tr>
                            <td align="left">Banquet (per person)</td>
                            <td align="left">10 gp</td>
                        </tr>
                        <tr>
                            <td align="left">Bread, loaf</td>
                            <td align="left">2 cp</td>
                        </tr>
                        <tr>
                            <td align="left">Cheese, hunk</td>
                            <td align="left">1 sp</td>
                        </tr>
                        <tr>
                            <td align="left"><i>Inn stay (per day)</i></td>
                            <td align="left"></td>
                        </tr>
                        <tr>
                            <td align="left">&nbsp;&nbsp;&nbsp;&nbsp;Squalid</td>
                            <td align="left">7 cp</td>
                        </tr>
                        <tr>    
                            <td align="left">&nbsp;&nbsp;&nbsp;&nbsp;Poor</td>
                            <td align="left">1 sp</td>
                        </tr>
                        <tr>
                            <td align="left">&nbsp;&nbsp;&nbsp;&nbsp;Modest</td>
                            <td align="left">5 sp</td>
                        </tr>
                        <tr>
                            <td align="left">&nbsp;&nbsp;&nbsp;&nbsp;Comfortable</td>
                            <td align="left">8 sp</td>
                        </tr>
                        <tr>
                            <td align="left">&nbsp;&nbsp;&nbsp;&nbsp;Wealthy</td>
                            <td align="left">2 gp</td>
                        </tr>
                        <tr>
                            <td align="left">&nbsp;&nbsp;&nbsp;&nbsp;Aristocratic</td>
                            <td align="left">4 gp</td>
                        </tr>
                        <tr>
                            <td align="left"><i>Meals (per day)</i></td>
                            <td align="left"></td>
                        </tr>
                        <tr>
                            <td align="left">&nbsp;&nbsp;&nbsp;&nbsp;Squalid</td>
                            <td align="left">3 cp</td>
                        </tr>
                        <tr>
                            <td align="left">&nbsp;&nbsp;&nbsp;&nbsp;Poor</td>
                            <td align="left">6 cp</td>
                        </tr>
                        <tr>
                            <td align="left">&nbsp;&nbsp;&nbsp;&nbsp;Modest</td>
                            <td align="left">3 sp</td>
                        </tr>
                        <tr>
                            <td align="left">&nbsp;&nbsp;&nbsp;&nbsp;Comfortable</td>
                            <td align="left">5 sp</td>
                        </tr>
                        <tr>
                            <td align="left">&nbsp;&nbsp;&nbsp;&nbsp;Wealthy</td>
                            <td align="left">8 sp</td>
                        </tr>
                        <tr>
                            <td align="left">&nbsp;&nbsp;&nbsp;&nbsp;Aristocratic</td>
                            <td align="left">2 gp</td>
                        </tr>
                        <tr>
                            <td align="left">Meat, chunk</td>
                            <td align="left">3 sp</td>
                        </tr>
                        <tr>
                            <td align="left"><i>Wine</i></td>
                            <td align="left"></td>
                        </tr>
                        <tr>    
                            <td align="left">Common (pitcher)</td>
                            <td align="left">2 sp</td>
                        </tr>
                        <tr>
                            <td align="left">Fine (bottle)</td>
                            <td align="left">10 gp</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                 <div class="column">
                <div name="CurrencyExchangeRates" data-unique="CurrencyExchangeRates"></div><h2>Currency Exchange Rates</h2>
                <table id="currency">
                <tbody><tr>
                    <th align="left">Coin</th>
                    <th align="left">CP</th>
                    <th align="left">SP</th>
                    <th align="left">EP</th>
                    <th align="left">GP</th>
                    <th align="left">PP</th>
                </tr>
                <tr>
                    <td>Copper</td>
                    <td><b>1</b></td>
                    <td>1/10</td>
                    <td>1/50</td>
                    <td>1/100</td>
                    <td>1/1000</td>
                </tr>
                <tr>
                    <td>Silver</td>
                    <td>10</td>
                    <td><b>1</b></td>
                    <td>1/5</td>
                    <td>1/10</td>
                    <td>1/100</td>
                </tr>
                <tr>
                    <td>Electrum</td>
                    <td>50</td>
                    <td>5</td>
                    <td><b>1</b></td>
                    <td>1/2</td>
                    <td>1/20</td>
                </tr>
                <tr>
                    <td>Gold</td>
                    <td>100</td>
                    <td>10</td>
                    <td>2</td>
                    <td><b>1</b></td>
                    <td>1/10</td>
                </tr>
                <tr>
                    <td>Platinum</td>
                    <td>1000</td>
                    <td>100</td>
                    <td>50</td>
                    <td>10</td>
                    <td><b>1</b></td>
                </tr>
            </tbody>
            </table>
            </div>
            </div>
            <div class="columns">
                <div class="column">
                    <table>
                        <tbody><tr>
                            <th align="left"><a href="#" onclick="rollLink(this); return false;">d20</a></th>
                            <th align="left">Event</th>
                        </tr>
                        <tr>
                            <td align="left">1</td>
                            <td align="left">A door opens</td>
                        </tr>
                        <tr>
                            <td align="left">2</td>
                            <td align="left">A fire starts</td>
                        </tr>
                        <tr>
                            <td align="left">3</td>
                            <td align="left">A meteor shoots across the sky</td>
                        </tr>
                        <tr>
                            <td align="left">4</td>
                            <td align="left">A monster appears</td>
                        </tr>
                        <tr>
                            <td align="left">5</td>
                            <td align="left">A screech pierces the air</td>
                        </tr>
                        <tr>
                            <td align="left">6</td>
                            <td align="left">A storm begins</td>
                        </tr>
                        <tr>
                            <td align="left">7</td>
                            <td align="left">A strange star appears in the sky</td>
                        </tr>
                        <tr>
                            <td align="left">8</td>
                            <td align="left">A strong gust of wind blows through</td>
                        </tr>
                        <tr>
                            <td align="left">9</td>
                            <td align="left">A tremor shakes the ground</td>
                        </tr>
                        <tr>
                            <td align="left">10</td>
                            <td align="left">Someone experiences déjà vu</td>
                        </tr>
                        <tr>
                            <td align="left">11</td>
                            <td align="left">Someone gets angry</td>
                        </tr>
                        <tr>
                            <td align="left">12</td>
                            <td align="left">Someone glimpses the future</td>
                        </tr>
                        <tr>
                            <td align="left">13</td>
                            <td align="left">Someone has a sense of foreboding</td>
                        </tr>
                        <tr>
                            <td align="left">14</td>
                            <td align="left">Someone has to go to the bathroom</td>
                        </tr>
                        <tr>
                            <td align="left">15</td>
                            <td align="left">Something spills or falls to the ground</td>
                        </tr>
                        <tr>
                            <td align="left">16</td>
                            <td align="left">Something isn't where it's supposed to be</td>
                        </tr>
                        <tr>
                            <td align="left">17</td>
                            <td align="left">The lights go out</td>
                        </tr>
                        <tr>
                            <td align="left">18</td>
                            <td align="left">The sun comes out</td>
                        </tr>
                        <tr>
                            <td align="left">19</td>
                            <td align="left">There's a foul smell in the air</td>
                        </tr>
                        <tr>
                            <td align="left">20</td>
                            <td align="left">Unexplained magic occurs</td>
                        </tr>
                    </tbody></table>
                </div>
                <div class="column">
                    <h3 >Trap Trigger</h3>
                    <table>
                        <tbody><tr>
                            <th align="left"></th>
                            <th align="left">Trigger</th>
                        </tr>
                        <tr>
                            <td align="left">1</td>
                            <td align="left">Stepped on (floor, stairs)</td>
                        </tr>
                        <tr>
                            <td align="left">2</td>
                            <td align="left">Moved through (doorway, hallway)</td>
                        </tr>
                        <tr>
                            <td align="left">3</td>
                            <td align="left">Touched (doorknob, statue)</td>
                        </tr>
                        <tr>
                            <td align="left">4</td>
                            <td align="left">Opened (door, treasure chest)</td>
                        </tr>
                        <tr>
                            <td align="left">5</td>
                            <td align="left">Looked at (mural, arcane symbol)</td>
                        </tr>
                        <tr>
                            <td align="left">6</td>
                            <td align="left">Moved</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div class="column">
                    <h3 id="randomtrapeffect">Trap Effect</h3>
                    <table>
                        <tbody><tr>
                            <th width="8%" align="left">d100</th>
                            <th align="left">Effect</th>
                        </tr>
                        <tr>
                            <td align="left">01-04</td>
                            <td align="left"><i>Magic missiles</i> shoot from a statue or object</td>
                        </tr>
                        <tr>
                            <td align="left">05-07</td>
                            <td align="left">Collapsing staircase creates a ramp that deposits characters into a pit at its lower end</td>
                        </tr>
                        <tr>
                            <td align="left">08-10</td>
                            <td align="left">Ceiling block falls, or entire ceiling collapses</td>
                        </tr>
                        <tr>
                            <td align="left">11-12</td>
                            <td align="left">Ceiling lowers slowly into locked room</td>
                        </tr>
                        <tr>
                            <td align="left">13-14</td>
                            <td align="left">Chute opens in floor</td>
                        </tr>
                        <tr>
                            <td align="left">15-16</td>
                            <td align="left">Clanging noise attracts nearby monsters</td>
                        </tr>
                        <tr>
                            <td align="left">17-19</td>
                            <td align="left">Touching an object triggers a disintegrate spell</td>
                        </tr>
                        <tr>
                            <td align="left">20-23</td>
                            <td align="left">Door or other object is coated with contact poison</td>
                        </tr>
                        <tr>
                            <td align="left">24-27</td>
                            <td align="left">Fire shoots out from wall, floor, or object</td>
                        </tr>
                        <tr>
                            <td align="left">28-30</td>
                            <td align="left">Touching an object triggers a flesh to stone spell</td>
                        </tr>
                        <tr>
                            <td align="left">31-33</td>
                            <td align="left">Floor collapses or is an illusion</td>
                        </tr>
                        <tr>
                            <td align="left">34-36</td>
                            <td align="left">Vent releases gas: blinding, acidic, obscuring, paralyzing, poisonous, or sleep-inducing</td>
                        </tr>
                        <tr>
                            <td align="left">37-39</td>
                            <td align="left">Floor tiles are electrified</td>
                        </tr>
                        <tr>
                            <td align="left">40-43</td>
                            <td align="left"><i>Glyph of warding</i></td>
                        </tr>
                        <tr>
                            <td align="left">44-46</td>
                            <td align="left">Huge wheeled statue rolls down corridor</td>
                        </tr>
                        <tr>
                            <td align="left">47-49</td>
                            <td align="left">Lightning bolt shoots from wall or object</td>
                        </tr>
                        <tr>
                            <td align="left">50-52</td>
                            <td align="left">Locked room floods with water or acid</td>
                        </tr>
                        <tr>
                            <td align="left">53-56</td>
                            <td align="left">Darts shoot out of an opened chest</td>
                        </tr>
                        <tr>
                            <td align="left">57-59</td>
                            <td align="left">A weapon, suit of armor, or rug animates and attacks when touched (see "Animated objects" in the Monster Manual)</td>
                        </tr>
                        <tr>
                            <td align="left">60-62</td>
                            <td align="left">Pendulum, either bladed or weighted as a maul, swings across the room or hall</td>
                        </tr>
                        <tr>
                            <td align="left">63-67</td>
                            <td align="left">Hidden pit opens beneath characters (25% chance that a black pudding or gelatinous cube fills the bottom of the pit)</td>
                        </tr>
                        <tr>
                            <td align="left">68-70</td>
                            <td align="left">Hidden pit floods with acid or fire</td>
                        </tr>
                        <tr>
                            <td align="left">71-73</td>
                            <td align="left">Locking pit floods with water</td>
                        </tr>
                        <tr>
                            <td align="left">74-77</td>
                            <td align="left">Scything blade emerges from wall or object</td>
                        </tr>
                        <tr>
                            <td align="left">78-81</td>
                            <td align="left">Spears (possibly poisoned) spring out</td>
                        </tr>
                        <tr>
                            <td align="left">82-84</td>
                            <td align="left">Brittle stairs collapse over spikes</td>
                        </tr>
                        <tr>
                            <td align="left">85-88</td>
                            <td align="left"><i>Thunderwave</i> knocks characters into a pit or spikes</td>
                        </tr>
                        <tr>
                            <td align="left">89-91</td>
                            <td align="left">Steel or stone jaws restrain a character</td>
                        </tr>
                        <tr>
                            <td align="left">92-94</td>
                            <td align="left">Stone block smashes across hallway</td>
                        </tr>
                        <tr>
                            <td align="left">95-97</td>
                            <td align="left"><i>Symbol</i></td>
                        </tr>
                        <tr>
                            <td align="left">98-00</td>
                            <td align="left">Walls slide together</td>
                        </tr>
                    </tbody></table>
                </div>
            </div>
        </div>
    `;

const party = {
    data() {
        return {};
    },
    computed: {},
    template,
    methods: {}
};

export default party;
