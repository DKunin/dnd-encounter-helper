const traits = {
    personality: [
        'annoying',
        'patronizing',
        'sarcastic',
        'impetuous',
        'sardonic',
        'stoic',
        'fabulous',
        'aggressive',
        'passive aggressive',
        'confrontational',
        'apathetic',
        'sailor-mouthed'
    ],
    race: [
        'elf',
        'human',
        'halfelf',
        'orc',
        'halforc',
        'tabaxi',
        'rabantro',
        'dwarf',
        'gnome',
        'halfling',
        'tiefling',
        'grayling',
        'drow',
        'dauregar',
        'giant'
    ],
    class: [
        'cleric',
        'sorcerer',
        'wizard',
        'warlock',
        'bard',
        'barbarian',
        'fighter',
        'paladin'
    ],
    occupation: [],
    traits: [
        'bald',
        'birthmark',
        'braided beard or hair',
        'distinctive jewlery',
        'distinctive nose',
        'distinctive posture',
        'exceptionally beautiful',
        'exceptionally plain',
        'exceptionally ugly',
        'flamboyant clothes',
        'missing teeth',
        'nervous eye twitch',
        'unusual hair color',
        'unusual eye color',
        'unusual skin color',
        'smell',
        'missing eye',
        'missing limb',
        'broken horn-helmet',
        'displaced jaw',
        'blind',
        'tattoo',
        'scar',
        'breathing sound',
        'broken weapon'
    ],
    mannerisms: [
        'bites fingernails',
        'chews something',
        'constantly grooming self',
        'coughs',
        'enancuates overly clearly',
        'fidgets',
        'forces eye contact',
        'frequently uses the wrong word',
        'lisp',
        'makes constant jokes or puns',
        'paces',
        'prone to humming',
        'prone to predictions of doom',
        'prone to singing',
        'prone to whistling',
        'slurs words',
        'speaks in peculiar ways',
        'speaks loudly',
        'squints',
        'stares into the distance',
        'stutter',
        'taps fingers',
        'twirls hair or tugs beard',
        'unusually high/low voice',
        'uses colorful phrases',
        'uses flowery speech',
        'whispers'
    ],
    npcTraits: [
        'Abrasive',
        'Abrupt',
        'Absent-minded',
        'Abusive',
        'Accepting',
        'Accommodating',
        'Accomplished',
        'Action oriented',
        'Adamant',
        'Adaptable',
        'Addict',
        'ADHD',
        'Adulterer',
        'Adventurous',
        'Affable',
        'Affectionate',
        'Afraid',
        'Afraid of commitment',
        'Afraid of ghosts',
        'Aggressive',
        'Agnostic',
        'Agonized',
        'Agreeable',
        'Alcoholic',
        'Alert',
        'Alluring',
        'Aloof',
        'Altruistic',
        'Always late',
        'Amateurish demeanor',
        'Ambiguous',
        'Ambitious',
        'Ambivalent',
        'Amiable',
        'Amused',
        'Amusing',
        'Analytical',
        'Angry',
        'Animated',
        'Annoyed',
        'Annoying',
        'Antagonistic',
        'Anti-intellectual',
        'Anti-social',
        'Anxious',
        'Apathetic',
        'Apologetic',
        'Appreciative',
        'Apprehensive',
        'Approachable',
        'Arbitrary',
        'Argumentative',
        'Aristocratic',
        'Arrogant',
        'Art collector',
        'Articulate',
        'Artistic',
        'Artless',
        'Ashamed',
        'Aspiring',
        'Assertive',
        'Astonished',
        'Astounded',
        'Astute',
        'Attentive',
        'Attentive to others',
        'Audacious',
        'Austere',
        'Authoritarian',
        'Authoritative',
        'Autocratic',
        'Avoids conflict',
        'Aware of own limitations',
        'Awed',
        'Awful',
        'Awkward',
        'Babbling',
        'Babyish',
        'Backstabber',
        'Bashful',
        'Belligerent',
        'Benevolent',
        'Betrayed',
        'Bewildered',
        'Bewitching',
        'Biter',
        'Bitter',
        'Blames others',
        'Blasé',
        'Blissful',
        'Blowhard',
        'Boastful',
        'Boisterous',
        'Bold',
        'Boorish',
        'Bored',
        'Boring',
        'Bossy',
        'Boundless',
        'Bragging',
        'Brainy',
        'Brash',
        'Bratty',
        'Brave',
        'Brazen',
        'Bright',
        'Brilliant',
        'Broad-minded',
        'Brotherly',
        'Brutish',
        'Bubbly',
        'Bully',
        'Burdened',
        'Busy',
        'Calculating',
        'Callous',
        'Calm',
        'Candid',
        'Capable',
        'Capricious',
        'Captivated',
        'Carefree',
        'Careful',
        'Careless',
        'Careless of social rules',
        'Caring',
        'Caustic',
        'Cautious',
        'Changeable',
        'Charismatic',
        'Charitable',
        'Charming',
        'Chaste',
        'Chatty',
        'Cheat',
        'Cheerful',
        'Cheerless',
        'Childish',
        'Chivalrous',
        'Civilised',
        'Classy',
        'Clean',
        'Clever',
        'Close',
        'Closed',
        'Clumsy',
        'Coarse',
        'Cocky',
        'Coherent',
        'Cold',
        'Cold hearted',
        'Combative',
        'Comfortable',
        'Committed',
        'Communicative',
        'Compassionate',
        'Competent',
        'Competitive',
        'Complacent',
        'Compliant',
        'Compulsive',
        'Compulsive liar',
        'Conceited',
        'Concerned',
        'Concrete thinking',
        'Condemned',
        'Condescending',
        'Confident',
        'Conformist',
        'Confused',
        'Congenial',
        'Connoisseur of good drink',
        'Connoisseur of good food',
        'Conscientious',
        'Conservative',
        'Considerate',
        'Consistent',
        'Conspicuous',
        'Conspiracy theorist',
        'Constricting',
        'Constructive',
        'Content',
        'Contented',
        'Contrarian',
        'Contrary',
        'Contrite',
        'Controlling',
        'Conventional',
        'Conversational',
        'Cool',
        'Cooperative',
        'Coquettish',
        'Cosmopolitan',
        'Courageous',
        'Courteous',
        'Covetous',
        'Cowardly',
        'Cowering',
        'Coy',
        'Crabby',
        'Crafty',
        'Cranky',
        'Crazy',
        'Creative',
        'Credible',
        'Creepy',
        'Critical',
        'Cross',
        'Crude',
        'Cruel',
        'Crushed',
        'Cuddly',
        'Culpable',
        'Cultured',
        'Cunning',
        'Curious',
        'Cutthroat',
        'Cynical',
        'Dainty',
        'Dangerous',
        'Daredevil',
        'Daring',
        'Dark',
        'Dashing',
        'Dauntless',
        'Dazzling',
        'Debonair',
        'Deceitful',
        'Deceiving',
        'Decent',
        'Decisive',
        'Decorous',
        'Dedicated',
        'Defeated',
        'Deferential',
        'Defiant',
        'Delegates authority',
        'Deliberate',
        'Deliberative',
        'Delicate',
        'Delighted',
        'Delightful',
        'Delusional about own skills',
        'Demanding',
        'Demonic',
        'Dependable',
        'Dependent',
        'Depraved',
        'Depressed',
        'Depressive',
        'Deranged',
        'Desirous',
        'Despairing',
        'Despicable',
        'Despondent',
        'Destructive',
        'Detached',
        'Detail-oriented',
        'Determined',
        'Develops close friendships',
        'Devilish',
        'Devious',
        'Devoted',
        'Devout',
        'Dictatorial',
        'Diffident',
        'Dignified',
        'Diligent',
        'Diminished',
        'Diplomatic',
        'Direct',
        'Directionless',
        'Disaffected',
        'Disagreeable',
        'Discerning',
        'Disciplined',
        'Discontented',
        'Discouraged',
        'Discreet',
        'Disgusting',
        'Dishonest',
        'Disillusioned',
        'Disinterested',
        'Disloyal',
        'Dismayed',
        'Disorderly',
        'Disorganized',
        'Disparaging',
        'Disregards rules',
        'Disrespectful',
        'Dissatisfied',
        'Dissident',
        'Dissolute',
        'Distant',
        'Distracted',
        'Distraught',
        'Distressed',
        'Distrustful',
        'Disturbed',
        'Divided',
        'Docile',
        'Does what is convenient',
        'Does what is necessary or right',
        'Dogmatic',
        'Dominant',
        'Domineering',
        'Dorky',
        'Doubtful',
        'Dowdy',
        'Downtrodden',
        'Draconian',
        'Dramatic',
        'Dreamer',
        'Dreamy',
        'Dreary',
        'Driven',
        'Drug addict',
        'Drunk',
        'Dubious',
        'Dull',
        'Dumb',
        'Dutiful',
        'Dynamic',
        'Eager',
        'Easily embarrassed',
        'Easily led',
        'Easily upset',
        'Easygoing',
        'Eccentric',
        'Ecstatic',
        'Educated',
        'Effervescent',
        'Efficient',
        'Egocentric',
        'Egotistic',
        'Egotistical',
        'Elated',
        'Electrified',
        'Eloquent',
        'Elusive',
        'Embarrassed',
        'Embittered',
        'Embraces change',
        'Eminent',
        'Emotional',
        'Emotionally stable',
        'Empathetic',
        'Empty',
        'Enchanted',
        'Enchanting',
        'Encouraging',
        'Enduring',
        'Energetic',
        'Engaging',
        'Enigmatic',
        'Enjoys a good argument',
        'Enjoys a good brawl',
        'Enjoys a little friendly competition',
        'Enterprising',
        'Entertaining',
        'Enthusiastic',
        'Entrepreneurial',
        'Envious',
        'Equable',
        'Erratic',
        'Ethical',
        'Evasive',
        'Evil',
        'Exacting',
        'Exasperated',
        'Excellent',
        'Excessive',
        'Excitable',
        'Excited',
        'Exclusive',
        'Exhausted',
        'Expansive',
        'Expedient',
        'Experimental',
        'Expert',
        'Expressive',
        'Extravagant',
        'Extraverted',
        'Extreme',
        'Exuberant',
        'Fabulous',
        'Faces reality',
        'Facetious',
        'Faded',
        'Failure',
        'Fair',
        'Faith in oneself',
        'Faith in others',
        'Faith in self',
        'Faithful',
        'Faithless',
        'Fake',
        'Fanatical',
        'Fanciful',
        'Fantastic',
        'Fascinated',
        'Fast learner',
        'Fastidious',
        'Fatalistic',
        'Fatigued',
        'Fawning',
        'Fearful',
        'Fearless',
        'Feisty',
        'Ferocious',
        'Fidgety',
        'Fierce',
        'Fiery',
        'Fighter',
        'Fine',
        'Finicky',
        'Fitness fanatic',
        'Flagging',
        'Flakey',
        'Flamboyant',
        'Flashy',
        'Fleeting',
        'Flexible',
        'Flighty',
        'Flippant',
        'Flirtatious',
        'Flirty',
        'Flustered',
        'Focused',
        'Follower',
        'Follows rules',
        'Foolhardy',
        'Foolish',
        'Forceful',
        'Forgetful',
        'Forgiving',
        'Formal',
        'Forthright',
        'Fortunate',
        'Foul',
        'Fragile',
        'Fragmented',
        'Frank',
        'Frantic',
        'Frazzled',
        'Free of guilt',
        'Free thinking',
        'Fresh',
        'Fretful',
        'Friendly',
        'Frightened',
        'Frigid',
        'Frugal',
        'Frustrated',
        'Fuddy duddy',
        'Fun',
        'Fun loving',
        'Fun to be around',
        'Funny',
        'Furious',
        'Furtive',
        'Fussy',
        'Gabby',
        'Garrulous',
        'Gaudy',
        'Generous',
        'Genial',
        'Gentle',
        'Genuine',
        'Giddy',
        'Giggly',
        'Gives others their freedom',
        'Gives up easily',
        'Giving',
        'Glad',
        'Glamorous',
        'Gloomy',
        'Glorious',
        'Glum',
        'Glutton',
        'Gluttonous',
        'Goal orientated',
        'Good',
        'Good communicator',
        'Good listener',
        'Good-natured',
        'Good-spirited',
        'Goofy',
        'Graceful',
        'Gracious',
        'Grandiose',
        'Grateful',
        'Gratified',
        'Greedy',
        'Gregarious',
        'Grief',
        'Grieving',
        'Groovy',
        'Grotesque',
        'Grouchy',
        'Grounded',
        'Group-oriented',
        'Growly',
        'Gruesome',
        'Gruff',
        'Grumpy',
        'Guarded',
        'Guileless',
        'Guilt prone',
        'Guilt ridden',
        'Guilty',
        'Gullible',
        'Haggard',
        'Haggling',
        'Handsome',
        'Happy',
        'Happy go lucky',
        'Hard',
        'Hard working',
        'Harmonious',
        'Harried',
        'Harsh',
        'Has a vision for the future',
        'Has achieved many things in life',
        'Has clear goals',
        'Has good taste',
        "Hasn't achieved much in life",
        'Hassled',
        'Hateful',
        'Haughty',
        'Haunted by a ghost',
        'Heart broken',
        'Heartless',
        'Heavenly',
        'Heavy hearted',
        'Hedonistic',
        'Helpful',
        'Helpless',
        'Heroic',
        'Hesitant',
        'High',
        'High energy',
        'High self esteem',
        'High social status',
        'Hilarious',
        'Hobbyist',
        'Holy',
        'Homeless',
        'Homesick',
        'Honest',
        'Honor bound',
        'Honorable',
        'Hopeful',
        'Hopeless',
        'Horrible',
        'Hospitable',
        'Hostile',
        'Hot headed',
        'Huffy',
        'Humble',
        'Humorous',
        'Hurt',
        'Hypocritical',
        'Hysterical',
        'Ignorant',
        'Ignored',
        'Ill-bred',
        'Imaginative',
        'Immaculate',
        'Immature',
        'Immobile',
        'Immodest',
        'Impartial',
        'Impatient',
        'Impeccable',
        'Imperial',
        'Impersonal',
        'Impolite',
        'Impotent',
        'Impoverished',
        'Impractical',
        'Impressed',
        'Improves self',
        'Impudent',
        'Impulsive',
        'In harmony',
        'Inactive',
        'Incoherent',
        'Incompetent',
        'Inconsiderate',
        'Inconsistent',
        'Indecisive',
        'Independent',
        'Indifferent',
        'Indiscrete',
        'Indiscriminate',
        'Individualistic',
        'Indolent',
        'Indulgent',
        'Industrious',
        'Inefficient',
        'Inept',
        'Infantile',
        'Infatuated',
        'Inflexible',
        'Informed',
        'Infuriated',
        'Inherited success',
        'Inhibited',
        'Inhumane',
        'Inimitable',
        'Innocent',
        'Inquisitive',
        'Insane',
        'Insecure',
        'Insensitive',
        'Insightful',
        'Insincere',
        'Insipid',
        'Insistent',
        'Insolent',
        'Insouciant',
        'Inspired',
        'Instinctive',
        'Insulting',
        'Intellectual',
        'Intelligent',
        'Intense',
        'Interested',
        'Interrupting',
        'Intimidated',
        'Intimidating',
        'Intolerant',
        'Intrepid',
        'Introspective',
        'Introverted',
        'Intuitive',
        'Inventive',
        'Involved',
        'Irresolute',
        'Irresponsible',
        'Irreverent',
        'Irritable',
        'Irritating',
        'Isolated',
        'Jackass',
        'Jaded',
        'Jealous',
        'Jittery',
        'Joking',
        'Jolly',
        'Jovial',
        'Joyful',
        'Joyous',
        'Judgmental',
        'Jumpy',
        'Just',
        'Keen',
        'Kenderish',
        'Kind',
        'Kind hearted',
        'Kittenish',
        'Knowledgeable',
        'Lackadaisical',
        'Lacking',
        'Laconic',
        'Languid',
        'Lascivious',
        'Late',
        'Lax',
        'Lazy',
        'Leader',
        'Leaves things unfinished',
        'Lecherous',
        'Lethargic',
        'Level',
        'Lewd',
        'Liar',
        'Liberal',
        'Licentious',
        'Light-hearted',
        'Likeable',
        'Likes people',
        'Limited',
        'Lineat',
        'Lingering',
        'Lively',
        'Logical',
        'Lonely',
        'Longing',
        'Loquacious',
        'Lordly',
        'Loud',
        'Loudmouth',
        'Lovable',
        'Love',
        'Lovely',
        'Lover, not a fighter',
        'Loves challenge',
        'Loving',
        'Low confidence',
        'Low drive',
        'Low social status',
        'Lowly',
        'Loyal',
        'Loyal to boss',
        'Loyal to community',
        'Loyal to family',
        'Loyal to friends',
        'Lucky',
        'Lunatic',
        'Lusty',
        'Lying',
        'Macho',
        'Mad',
        'Malevolent',
        'Malice',
        'Malicious',
        'Maniacal',
        'Manic',
        'Manipulative',
        'Mannered',
        'Mannerly',
        'Masochistic',
        'Materialistic',
        'Matronly',
        'Matter-of-fact',
        'Mature',
        'Maudlin',
        'Mean',
        'Mean-spirited',
        'Meek',
        'Megalomaniac',
        'Melancholy',
        'Melodramatic',
        'Mentally slow',
        'Merciful',
        'Mercurial',
        'Messy',
        'Meticulous',
        'Mild',
        'Mischievous',
        'Miserable',
        'Miserly',
        'Mistrusting',
        'Modern',
        'Modest',
        'Moody',
        'Moping',
        'Moralistic',
        'Morbid',
        'Motherly',
        'Motivated',
        'Muddled goals',
        'Murderer',
        'Mysterious',
        'Mystical',
        'Nagging',
        'Naive',
        'Narcissistic',
        'Narrow-minded',
        'Nasty',
        'Natural leader',
        'Naughty',
        'Neat',
        'Needs social approval',
        'Needy',
        'Negative',
        'Negligent',
        'Nervous',
        'Neurotic',
        'Never gives up',
        'Never hungry',
        'Nibbler',
        'Nice',
        'Night owl',
        'Nihilistic',
        'Nit picker',
        'No purpose',
        'No self confidence',
        'No-nonsense',
        'Noble',
        'Noisy',
        'Non-committing',
        'Nonchalant',
        'Nonconforming',
        'Nostalgic',
        'Nosy',
        'Not trustworthy',
        'Nuanced',
        'Nuisance',
        'Nurturing',
        'Nut',
        'Obedient',
        'Obliging',
        'Oblivious',
        'Obnoxious',
        'Obscene',
        'Obsequious',
        'Observant',
        'Obsessed',
        'Obsessive about something',
        'Obstinate',
        'Odd',
        'Odious',
        'Open',
        'Open to change',
        'Open-minded',
        'Opinionated',
        'Opportunistic',
        'Oppositional',
        'Optimistic',
        'Orcish',
        'Orderly',
        'Organized',
        'Ornery',
        'Ossified',
        'Ostentatious',
        "Others can't be relied on",
        'Outgoing',
        'Outraged',
        'Outrageous',
        'Outspoken',
        'Over wrought',
        'Overbearing',
        'Overconfident',
        'Overwhelmed',
        'Overwhelming',
        'Paces',
        'Pacifistic',
        'Painstaking',
        'Pampered',
        'Panicked',
        'Panicky',
        'Paranoid',
        'Participating',
        'Particular',
        'Passionate',
        'Passive',
        'Passive-aggressive',
        'Pathetic',
        'Patient',
        'Patriotic',
        'Peaceful',
        'Penitent',
        'Pensive',
        'Perceptive',
        'Perfect',
        'Perfectionist',
        'Performer',
        'Persecuted',
        'Perserverant',
        'Perseveres',
        'Persevering',
        'Persistent',
        'Personable',
        'Persuasive',
        'Pert',
        'Perverse',
        'Perverted',
        'Pessimistic',
        'Petrified',
        'Petty',
        'Petulant',
        'Philanthropic',
        'Picky',
        'Pious',
        'Pitiful',
        'Pity',
        'Placid',
        'Playful',
        'Pleasant',
        'Pleased',
        'Pleasing',
        'Plotting',
        'Plucky',
        'Polished',
        'Polite',
        'Pompous',
        'Poor',
        'Poor communicator',
        'Poor listener',
        'Popular',
        'Positive',
        'Possessive',
        'Power-hungry',
        'Practical',
        'Precise',
        'Predictable',
        'Preoccupied',
        'Pressured',
        'Presumptuous',
        'Pretentious',
        'Pretty',
        'Prim',
        'Primitive',
        'Private',
        'Productive',
        'Profane',
        'Professional',
        'Professional demeanor',
        'Promiscuous',
        'Proper',
        'Prosaic',
        'Prosperous',
        'Protective',
        'Proud',
        'Prudent',
        'Psychotic',
        'Puckish',
        'Punctilious',
        'Punctual',
        'Purposeful',
        'Pushy',
        'Puzzled',
        'Quarrelsome',
        'Queer',
        'Quick',
        'Quick tempered',
        'Quiet',
        'Quirky',
        'Quitter',
        'Quixotic',
        'Radical',
        'Raging',
        'Rambunctious',
        'Random',
        'Rapturous',
        'Rash',
        'Rational',
        'Rawboned',
        'Reactionary',
        'Realistic',
        'Reasonable',
        'Reasoning',
        'Rebellious',
        'Recalcitrant',
        'Receptive',
        'Reckless',
        'Reclusive',
        'Refined',
        'Reflective',
        'Refreshed',
        'Regretful',
        'Rejected',
        'Rejects change',
        'Relaxed',
        'Relentless',
        'Relents',
        'Reliable',
        'Relieved',
        'Religious',
        'Reluctant',
        'Remorseful',
        'Remote',
        'Repugnant',
        'Repulsive',
        'Resentful',
        'Reserved',
        'Resilient',
        'Resolute',
        'Resourceful',
        'Respected in the community',
        'Respectful',
        'Respects experience',
        'Respects traditional ideas',
        'Responsible',
        'Responsive',
        'Restless',
        'Restrained',
        'Results-oriented',
        'Retiring',
        'Reverent',
        'Rewarded',
        'Rhetorical',
        'Rich',
        'Right',
        'Righteous',
        'Rigid',
        'Risk averse',
        'Risk-taking',
        'Robust and healthy',
        'Rogue',
        'Romantic',
        'Rough',
        'Rowdy',
        'Rude',
        'Rugged',
        'Rule-bound',
        'Rule-conscious',
        'Ruthless',
        'Sacrificing',
        'Sad',
        'Sadistic',
        'Safe',
        'Sagely',
        'Saintly',
        'Salient',
        'Sanctimonious',
        'Sanguine',
        'Sarcastic',
        'Sassy',
        'Satisfied',
        'Saucy',
        'Savage',
        'Savvy',
        'Scared',
        'Scarred',
        'Scary',
        'Scattered',
        'Scheming',
        'Scornful',
        'Scrawny',
        'Screwed up',
        'Scruffy',
        'Secretive',
        'Secure',
        'Sedate',
        'Seditious',
        'Seductive',
        'Sees the big picture',
        'Selective',
        'Self-absorbed',
        'Self-assured',
        'Self-blaming',
        'Self-centered',
        'Self-confident',
        'Self-conscious',
        'Self-controlling',
        'Self-deprecating',
        'Self-directed',
        'Self-disciplined',
        'Self-doubting',
        'Self-effacing',
        'Self-giving',
        'Self-indulgent',
        'Self-made',
        'Self-reliant',
        'Self-righteous',
        'Self-satisfied',
        'Self-serving',
        'Self-sufficient',
        'Selfish',
        'Selfless',
        'Senile',
        'Sense of duty',
        'Sensitive',
        'Sensual',
        'Sentimental',
        'Serene',
        'Serious',
        'Servile',
        'Settled',
        'Sexual',
        'Sexy',
        'Shallow',
        'Shameless',
        'Sharp',
        'Sharp-tongued',
        'Sharp-witted',
        'Sheepish',
        'Shiftless',
        'Shifty',
        'Shocked',
        'Short',
        'Short-tempered',
        'Shows initiative',
        'Shrewd',
        'Shy',
        'Silent',
        'Silky',
        'Silly',
        'Simple',
        'Simple-minded',
        'Sincere',
        'Sisterly',
        'Skeptical',
        'Skillful',
        'Sleazy',
        'Sloppy',
        'Slovenly',
        'Slow paced',
        'Sluggish',
        'Slutty',
        'Sly',
        'Small-minded',
        'Smart',
        'Smiling',
        'Smooth',
        'Sneaky',
        'Snob',
        'Snobbish',
        'Sociable',
        'Socially bold',
        'Socially precise',
        'Soft',
        'Soft-hearted',
        'Soft-spoken',
        'Solemn',
        'Solitary',
        'Solution-oriented',
        'Sophisticated',
        'Sore',
        'Sorrowful',
        'Sorry',
        'Sour',
        'Spendthrift',
        'Spiritual',
        'Spiteful',
        'Splendid',
        'Spoiled',
        'Spontaneous',
        'Sports fan',
        'Spunky',
        'Squeamish',
        'Staid',
        'Startled',
        'Stately',
        'Static',
        'Steadfast',
        'Steady',
        'Stern',
        'Stimulating',
        'Stingy',
        'Stoic',
        'Stoical',
        'Stolid',
        'Straight laced',
        'Straight-laced',
        'Straightforward',
        'Strange',
        'Stress free',
        'Stressed out',
        'Strict',
        'Strident',
        'Strong',
        'Strong nerves',
        'Strong willed',
        'Stubborn',
        'Studious',
        'Stunned',
        'Stupefied',
        'Stupid',
        'Suave',
        'Submissive',
        'Subtle',
        'Successful',
        'Successful in school',
        'Successful in work',
        'Succinct',
        'Suffering',
        'Sulky',
        'Sullen',
        'Sultry',
        'Supercilious',
        'Superstitious',
        'Supportive',
        'Sure',
        'Surly',
        'Suspicious',
        'Suspicious of strangers',
        'Sweet',
        'Sycophantic',
        'Sympathetic',
        'Systematic',
        'Taciturn',
        'Tacky',
        'Tactful',
        'Tactless',
        'Takes responsibility',
        'Talented',
        'Talkative',
        'Tardy',
        'Tasteful',
        'Telepathic',
        'Temperamental',
        'Temperate',
        'Tempted',
        'Tenacious',
        'Tender minded',
        'Tense',
        'Tentative',
        'Tenuous',
        'Terrible',
        'Terrified',
        'Testy',
        'Thankful',
        'Thankless',
        'Thick skinned',
        'Thief',
        'Thorough',
        'Thoughtful',
        'Thoughtless',
        'Threatened',
        'Threatening',
        'Thrifty',
        'Thrilled',
        'Thrillseeker',
        'Thwarted',
        'Tight',
        'Time driven',
        'Timid',
        'Tired',
        'Tireless',
        'Tiresome',
        'Toadying',
        'Tolerant',
        'Tolerates disorder',
        'Torpid',
        'Touchy',
        'Tough',
        'Tough-minded',
        'Traditional',
        'Traitorous',
        'Tranquil',
        'Treacherous',
        'Treasonous',
        'Tricky',
        'Tries to do everything',
        'Trivial',
        'Troubled',
        'Truculent',
        'Trusting',
        'Trustworthy',
        'Truthful',
        'Typical',
        'Tyrannical',
        'Unappreciative',
        'Unapproachable',
        'Unassuming',
        'Unaware of own limitations',
        'Unbending',
        'Unbiased',
        'Uncaring',
        'Uncommitted',
        'Uncommunicative',
        'Unconcerned',
        'Unconditional',
        'Uncontrolled',
        'Unconventional',
        'Uncooperative',
        'Uncoordinated',
        'Uncouth',
        'Undependable',
        'Understanding',
        'Undesirable',
        'Undisciplined',
        'Uneasy',
        'Uneducated',
        'Unenthusiastic',
        'Unexacting',
        'Unfeeling',
        'Unfocused',
        'Unforgiving',
        'Unfriendly',
        'Ungrateful',
        'Unhappy',
        'Unhelpful',
        'Uninhibited',
        'Unkind',
        'Unlucky',
        'Unmotivated',
        'Unpredictable',
        'Unprejudiced',
        'Unpretentious',
        'Unreasonable',
        'Unreceptive',
        'Unreliable',
        'Unresponsive',
        'Unrestrained',
        'Unruly',
        'Unscrupulous',
        'Unselfish',
        'Unsentimental',
        'Unsettled',
        'Unshakeable',
        'Unsure',
        'Unsuspecting',
        'Unsuspicious',
        'Unsympathetic',
        'Unsystematic',
        'Unusual',
        'Unwilling',
        'Unworried',
        'Upbeat',
        'Upset',
        'Uptight',
        'Useful',
        'Utilitarian',
        'Vacant',
        'Vague',
        'Vain',
        'Valiant',
        'Valorous',
        'Values fair competition',
        'Values family',
        'Values hard work',
        'Values honesty',
        'Values material possessions',
        'Values money',
        'Values religion',
        'Vehement',
        'Vengeful',
        'Venomous',
        'Venturesome',
        'Verbose',
        'Versatile',
        'Veteran',
        'Vicious',
        'Vigilant',
        'Vigorous',
        'Vindictive',
        'Violent',
        'Virtuous',
        'Visual',
        'Vital',
        'Vivacious',
        'Volatile',
        'Voracious',
        'Vulgar',
        'Vulnerable',
        'Wanton',
        'Warlike',
        'Warm',
        'Warm hearted',
        'Wary',
        'Wasteful',
        'Watchful',
        'Weak',
        'Weak nerves',
        'Weary',
        'Weepy',
        'Weird',
        'Welcoming',
        'Well grounded',
        'Well-groomed',
        'Whimsical',
        'Wholesome',
        'Wicked',
        'Wild',
        'Willful',
        'Willing',
        'Willpower',
        'Wise',
        'Wishy washy',
        'Withdrawn',
        'Witty',
        'Wonderful',
        'Works well under pressure',
        'Worldly',
        'Worried',
        'Worrying',
        'Worshipful',
        'Worships the devil',
        'Worthless',
        'Wretched',
        'Xenophobic',
        'Youthful',
        'Zany',
        'Zealot',
        'Zealous',
        'Able',
        'Accident prone',
        'Adorable',
        'Always hungry',
        'Beautiful',
        'Dirty',
        'Diseased',
        'Filthy',
        'Hardy',
        'Weak constitution',
        'Healthy',
        'Hormonal',
        'Ill',
        'Lean',
        'Nimble',
        'Obese',
        'Overweight',
        'Plain',
        'Sterile',
        'Tall',
        'Ugly',
        'Unclean',
        'Wealthy',
        'Young',
        'Abandoned',
        'Possessed',
        'Psychopath'
    ]
};

export default traits;
