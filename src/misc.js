const template = `
        <div class="section">
            <h2 class="is-size-5">Misc</h2>
            <div class="columns">
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
        </tbody></table>
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
