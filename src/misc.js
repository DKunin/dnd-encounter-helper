const template = `
<div class="section">
    <div class="columns">
        <div class="column">
            <table class="table">
                <tbody>
                    <tr>
                        <th>Armor</th>
                        <th>Cost</th>
                        <th>ACArmor Class (AC)</th>
                        <th>StrStrength</th>
                        <th>Stealth</th>
                        <th>Wt.Weight</th>
                    </tr>
                    <tr>
                        <td colspan="6"><em>Light Armor</em></td>
                    </tr>
                    <tr>
                        <td>Padded</td>
                        <td>5 gp</td>
                        <td>11 + Dex modifier</td>
                        <td>&mdash;</td>
                        <td>Disadvantage</td>
                        <td>8 lb.</td>
                    </tr>
                    <tr>
                        <td>Leather</td>
                        <td>10 gp</td>
                        <td>11 + Dex modifier</td>
                        <td>&mdash;</td>
                        <td>&mdash;</td>
                        <td>10 lb.</td>
                    </tr>
                    <tr>
                        <td>Studded leather</td>
                        <td>45 gp</td>
                        <td>12 + Dex modifier</td>
                        <td>&mdash;</td>
                        <td>&mdash;</td>
                        <td>13 lb.</td>
                    </tr>
                    <tr>
                        <td colspan="6"><em>Medium Armor</em></td>
                    </tr>
                    <tr>
                        <td>Hide</td>
                        <td>10 gp</td>
                        <td>12 + Dex modifier (max 2)</td>
                        <td>&mdash;</td>
                        <td>&mdash;</td>
                        <td>12 lb.</td>
                    </tr>
                    <tr>
                        <td>Chain shirt</td>
                        <td>50 gp</td>
                        <td>13 + Dex modifier (max 2)</td>
                        <td>&mdash;</td>
                        <td>&mdash;</td>
                        <td>20 lb.</td>
                    </tr>
                    <tr>
                        <td>Scale mail</td>
                        <td>50 gp</td>
                        <td>14 + Dex modifier (max 2)</td>
                        <td>&mdash;</td>
                        <td>Disadvantage</td>
                        <td>45 lb.</td>
                    </tr>
                    <tr>
                        <td>Breastplate</td>
                        <td>400 gp</td>
                        <td>14 + Dex modifier (max 2)</td>
                        <td>&mdash;</td>
                        <td>&mdash;</td>
                        <td>20 lb.</td>
                    </tr>
                    <tr>
                        <td>Half plate</td>
                        <td>750 gp</td>
                        <td>15 + Dex modifier (max 2)</td>
                        <td>&mdash;</td>
                        <td>Disadvantage</td>
                        <td>40 lb.</td>
                    </tr>
                    <tr>
                        <td colspan="6"><em>Heavy Armor</em></td>
                    </tr>
                    <tr>
                        <td>Ring mail</td>
                        <td>30 gp</td>
                        <td>14</td>
                        <td>&mdash;</td>
                        <td>Disadvantage</td>
                        <td>40 lb.</td>
                    </tr>
                    <tr>
                        <td>Chain mail</td>
                        <td>75 gp</td>
                        <td>16</td>
                        <td>Str 13</td>
                        <td>Disadvantage</td>
                        <td>55 lb.</td>
                    </tr>
                    <tr>
                        <td>Splint</td>
                        <td>200 gp</td>
                        <td>17</td>
                        <td>Str 15</td>
                        <td>Disadvantage</td>
                        <td>60 lb.</td>
                    </tr>
                    <tr>
                        <td>Plate</td>
                        <td>1,500 gp</td>
                        <td>18</td>
                        <td>Str 15</td>
                        <td>Disadvantage</td>
                        <td>65 lb.</td>
                    </tr>
                    <tr>
                        <td colspan="6"><em>Shield</em></td>
                    </tr>
                    <tr>
                        <td>Shield</td>
                        <td>10 gp</td>
                        <td>+2</td>
                        <td>&mdash;</td>
                        <td>&mdash;</td>
                        <td>6 lb.</td>
                    </tr>
                </tbody>
            </table>
            <table class="table">
                <tbody>
                    <tr>
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
                </tbody>
            </table>
            <table class="table">
                <tbody>
                    <tr>
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
                </tbody>
            </table>
            <table class="table">
                <tbody>
                    <tr>
                        <th>Experience Points</th>
                        <th>Level</th>
                        <th>Proficiency Bonus</th>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>1</td>
                        <td>+2</td>
                    </tr>
                    <tr>
                        <td>300</td>
                        <td>2</td>
                        <td>+2</td>
                    </tr>
                    <tr>
                        <td>900</td>
                        <td>3</td>
                        <td>+2</td>
                    </tr>
                    <tr>
                        <td>2,700</td>
                        <td>4</td>
                        <td>+2</td>
                    </tr>
                    <tr>
                        <td>6,500</td>
                        <td>5</td>
                        <td>+3</td>
                    </tr>
                    <tr>
                        <td>14,000</td>
                        <td>6</td>
                        <td>+3</td>
                    </tr>
                    <tr>
                        <td>23,000</td>
                        <td>7</td>
                        <td>+3</td>
                    </tr>
                    <tr>
                        <td>34,000</td>
                        <td>8</td>
                        <td>+3</td>
                    </tr>
                    <tr>
                        <td>48,000</td>
                        <td>9</td>
                        <td>+4</td>
                    </tr>
                    <tr>
                        <td>64,000</td>
                        <td>10</td>
                        <td>+4</td>
                    </tr>
                    <tr>
                        <td>85,000</td>
                        <td>11</td>
                        <td>+4</td>
                    </tr>
                    <tr>
                        <td>100,000</td>
                        <td>12</td>
                        <td>+4</td>
                    </tr>
                    <tr>
                        <td>120,000</td>
                        <td>13</td>
                        <td>+5</td>
                    </tr>
                    <tr>
                        <td>140,000</td>
                        <td>14</td>
                        <td>+5</td>
                    </tr>
                    <tr>
                        <td>165,000</td>
                        <td>15</td>
                        <td>+5</td>
                    </tr>
                    <tr>
                        <td>195,000</td>
                        <td>16</td>
                        <td>+5</td>
                    </tr>
                    <tr>
                        <td>225,000</td>
                        <td>17</td>
                        <td>+6</td>
                    </tr>
                    <tr>
                        <td>265,000</td>
                        <td>18</td>
                        <td>+6</td>
                    </tr>
                    <tr>
                        <td>305,000</td>
                        <td>19</td>
                        <td>+6</td>
                    </tr>
                    <tr>
                        <td>355,000</td>
                        <td>20</td>
                        <td>+6</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="column">
            <table class="table">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Damage</th>
                        <th>Weight</th>
                        <th>Properties</th>
                    </tr>
                    <tr>
                        <td colspan="5"><em>Simple Melee Weapons</em></td>
                    </tr>
                    <tr>
                        <td>Club</td>
                        <td>1 sp</td>
                        <td>1d4 bludgeoning</td>
                        <td>2 lb.</td>
                        <td>Light</td>
                    </tr>
                    <tr>
                        <td>Dagger</td>
                        <td>2 gp</td>
                        <td>1d4 piercing</td>
                        <td>1 lb.</td>
                        <td>Finesse, light, thrown (range 20/60)</td>
                    </tr>
                    <tr>
                        <td>Greatclub</td>
                        <td>2 sp</td>
                        <td>1d8 bludgeoning</td>
                        <td>10 lb.</td>
                        <td>Two-handed</td>
                    </tr>
                    <tr>
                        <td>Handaxe</td>
                        <td>5 gp</td>
                        <td>1d6 slashing</td>
                        <td>2 lb.</td>
                        <td>Light, thrown (range 20/60)</td>
                    </tr>
                    <tr>
                        <td>Javelin</td>
                        <td>5 sp</td>
                        <td>1d6 piercing</td>
                        <td>2 lb.</td>
                        <td>Thrown (range 30/120)</td>
                    </tr>
                    <tr>
                        <td>Light hammer</td>
                        <td>2 gp</td>
                        <td>1d4 bludgeoning</td>
                        <td>2 lb.</td>
                        <td>Light, thrown (range 20/60)</td>
                    </tr>
                    <tr>
                        <td>Mace</td>
                        <td>5 gp</td>
                        <td>1d6 bludgeoning</td>
                        <td>4 lb.</td>
                        <td>&mdash;</td>
                    </tr>
                    <tr>
                        <td>Quarterstaff</td>
                        <td>2 sp</td>
                        <td>1d6 bludgeoning</td>
                        <td>4 lb.</td>
                        <td>Versatile (1d8)</td>
                    </tr>
                    <tr>
                        <td>Sickle</td>
                        <td>1 gp</td>
                        <td>1d4 slashing</td>
                        <td>2 lb.</td>
                        <td>Light</td>
                    </tr>
                    <tr>
                        <td>Spear</td>
                        <td>1 gp</td>
                        <td>1d6 piercing</td>
                        <td>3 lb.</td>
                        <td>Thrown (range 20/60), versatile (1d8)</td>
                    </tr>
                    <tr>
                        <td colspan="5"><em>Simple Ranged Weapons</em></td>
                    </tr>
                    <tr>
                        <td>Crossbow, light</td>
                        <td>25 gp</td>
                        <td>1d8 piercing</td>
                        <td>5 lb.</td>
                        <td>Ammunition (range 80/320), loading, two-handed</td>
                    </tr>
                    <tr>
                        <td>Dart</td>
                        <td>5 cp</td>
                        <td>1d4 piercing</td>
                        <td>1/4 lb.</td>
                        <td>Finesse, thrown (range 20/60)</td>
                    </tr>
                    <tr>
                        <td>Shortbow</td>
                        <td>25 gp</td>
                        <td>1d6 piercing</td>
                        <td>2 lb.</td>
                        <td>Ammunition (range 80/320), two-handed</td>
                    </tr>
                    <tr>
                        <td>Sling</td>
                        <td>1 sp</td>
                        <td>1d4 bludgeoning</td>
                        <td>&mdash;</td>
                        <td>Ammunition (range 30/120)</td>
                    </tr>
                    <tr>
                        <td colspan="5"><em>Martial Melee Weapons</em></td>
                    </tr>
                    <tr>
                        <td>Battleaxe</td>
                        <td>10 gp</td>
                        <td>1d8 slashing</td>
                        <td>4 lb.</td>
                        <td>Versatile (1d10)</td>
                    </tr>
                    <tr>
                        <td>Flail</td>
                        <td>10 gp</td>
                        <td>1d8 bludgeoning</td>
                        <td>2 lb.</td>
                        <td>&mdash;</td>
                    </tr>
                    <tr>
                        <td>Glaive</td>
                        <td>20 gp</td>
                        <td>1d10 slashing</td>
                        <td>6 lb.</td>
                        <td>Heavy, reach, two-handed</td>
                    </tr>
                    <tr>
                        <td>Greataxe</td>
                        <td>30 gp</td>
                        <td>1d12 slashing</td>
                        <td>7 lb.</td>
                        <td>Heavy, two-handed</td>
                    </tr>
                    <tr>
                        <td>Greatsword</td>
                        <td>50 gp</td>
                        <td>2d6 slashing</td>
                        <td>6 lb.</td>
                        <td>Heavy, two-handed</td>
                    </tr>
                    <tr>
                        <td>Halberd</td>
                        <td>20 gp</td>
                        <td>1d10 slashing</td>
                        <td>6 lb.</td>
                        <td>Heavy, reach, two-handed</td>
                    </tr>
                    <tr>
                        <td>Lance</td>
                        <td>10 gp</td>
                        <td>1d12 piercing</td>
                        <td>6 lb.</td>
                        <td>Reach, special</td>
                    </tr>
                    <tr>
                        <td>Longsword</td>
                        <td>15 gp</td>
                        <td>1d8 slashing</td>
                        <td>3 lb.</td>
                        <td>Versatile (1d10)</td>
                    </tr>
                    <tr>
                        <td>Maul</td>
                        <td>10 gp</td>
                        <td>2d6 bludgeoning</td>
                        <td>10 lb.</td>
                        <td>Heavy, two-handed</td>
                    </tr>
                    <tr>
                        <td>Morningstar</td>
                        <td>15 gp</td>
                        <td>1d8 piercing</td>
                        <td>4 lb.</td>
                        <td>&mdash;</td>
                    </tr>
                    <tr>
                        <td>Pike</td>
                        <td>5 gp</td>
                        <td>1d10 piercing</td>
                        <td>18 lb.</td>
                        <td>Heavy, reach, two-handed</td>
                    </tr>
                    <tr>
                        <td>Rapier</td>
                        <td>25 gp</td>
                        <td>1d8 piercing</td>
                        <td>2 lb.</td>
                        <td>Finesse</td>
                    </tr>
                    <tr>
                        <td>Scimitar</td>
                        <td>25 gp</td>
                        <td>1d6 slashing</td>
                        <td>3 lb.</td>
                        <td>Finesse, light</td>
                    </tr>
                    <tr>
                        <td>Shortsword</td>
                        <td>10 gp</td>
                        <td>1d6 piercing</td>
                        <td>2 lb.</td>
                        <td>Finesse, light</td>
                    </tr>
                    <tr>
                        <td>Trident</td>
                        <td>5 gp</td>
                        <td>1d6 piercing</td>
                        <td>4 lb.</td>
                        <td>Thrown (range 20/60), versatile (1d8)</td>
                    </tr>
                    <tr>
                        <td>War pick</td>
                        <td>5 gp</td>
                        <td>1d8 piercing</td>
                        <td>2 lb.</td>
                        <td>&mdash;</td>
                    </tr>
                    <tr>
                        <td>Warhammer</td>
                        <td>15 gp</td>
                        <td>1d8 bludgeoning</td>
                        <td>2 lb.</td>
                        <td>Versatile (1d10</td>
                    </tr>
                    <tr>
                        <td>Whip</td>
                        <td>2 gp</td>
                        <td>1d4 slashing</td>
                        <td>3 lb.</td>
                        <td>Finesse, reach</td>
                    </tr>
                    <tr>
                        <td colspan="5"><em>Martial Ranged Weapons</em></td>
                    </tr>
                    <tr>
                        <td>Blowgun</td>
                        <td>10 gp</td>
                        <td>1 piercing</td>
                        <td>1 lb.</td>
                        <td>Ammunition (range 25/100), loading</td>
                    </tr>
                    <tr>
                        <td>Crossbow, hand</td>
                        <td>75 gp</td>
                        <td>1d6 piercing</td>
                        <td>3 lb.</td>
                        <td>Ammunition (range 30/120), light, loading</td>
                    </tr>
                    <tr>
                        <td>Crossbow, heavy</td>
                        <td>50 gp</td>
                        <td>1d10 piercing</td>
                        <td>18 lb.</td>
                        <td>Ammunition (range 100/400), heavy, loading, two-handed</td>
                    </tr>
                    <tr>
                        <td>Longbow</td>
                        <td>50 gp</td>
                        <td>1d8 piercing</td>
                        <td>2 lb.</td>
                        <td>Ammunition (range 150/600), heavy, two-handed</td>
                    </tr>
                    <tr>
                        <td>Net</td>
                        <td>1 gp</td>
                        <td>&mdash;</td>
                        <td>3 lb.</td>
                        <td>Special, thrown (range 5/15)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <table class="table">
                <tbody>
                    <tr>
                        <th align="left">d20</th>
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
                </tbody>
            </table>
        </div>

        <div class="column">
            <table class="table">
                <tbody>
                    <tr>
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
            <table class="table">
                <tbody>
                    <tr>
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
