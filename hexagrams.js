// this data has been borrowed and modified from an original version by @mrdestructicity https://github.com/mrdestructicity/i-ching

const data = [
  {
    number: 1,
    pattern: 777777,
    symbol: `䷀`,
    name: {
      zh: `乾`,
      en: `The Creative`
    },
    judgment: `The Creative works sublime success,
Furthering through perseverance.`,
    image: `The movement of heaven is full of power.
Thus the superior man makes himself strong and untiring.`,
    lines: [
      `Hidden dragon. Do not act.`,
      `Dragon appearing in the field.
It furthers one to see the great man.`,
      `All day long the superior man is creatively active.
At nightfall his mind is still beset with cares.
Danger. No blame.`,
      `Wavering flight over the depths.
No blame.`,
      `Flying dragon in the heavens.
It furthers one to see the great man.`,
      `Arrogant dragon will have cause to repent.`,
      `There appears a flight of dragons without heads.
Good fortune.`
    ]
  },
  {
    number: 2,
    pattern: 888888,
    symbol: `䷁`,
    name: {
      zh: `坤`,
      en: `The Receptive`
    },
    judgment: `The Receptive brings about sublime success,
Furthering through the perseverance of a mare.
If the superior man undertakes something and tries to lead,
He goes astray;
But if he follows, he finds guidance.
It is favorable to find friends in the west and south,
To forego friends in the east and north.
Quiet perseverance brings good fortune.`,
    image: `The earth's condition is receptive devotion.
Thus the superior man who has breadth of character
Carries the outer world.`,
    lines: [
      `When there is hoarfrost underfoot,
Solid ice is not far off.`,
      `Straight, square, great.
Without purpose,
Yet nothing remains unfurthered.`,
      `Hidden lines.
One is able to remain persevering.
If by chance you are in the service of a king,
Seek not works, but bring to completion.`,
      `A tied-up sack. No blame, no praise.`,
      `A yellow lower garment brings supreme good fortune.`,
      `Dragons fight in the meadow.
Their blood is black and yellow.`,
      `Lasting perseverance furthers.`
    ]
  },
  {
    number: 3,
    pattern: 788878,
    symbol: `䷂`,
    name: {
      zh: `屯`,
      en: `Difficulty at the Beginning`
    },
    judgment: `Difficulty at the Beginning works supreme success,
Furthering through perseverance.
Nothing should be undertaken.
It furthers one to appoint helpers.`,
    image: `Clouds and thunder:
The image of Difficulty at the Beginning.
Thus the superior man
Brings order out of confusion.`,
    lines: [
      `Hesitation and hindrance.
It furthers one to remain persevering.
It furthers one to appoint helpers.`,
      `Difficulties pile up.
Horse and wagon part.
He is not a robber;
He wants to woo when the time comes.
The maiden is chaste,
She does not pledge herself.
Ten years - then she pledges herself.`,
      `Whoever hunts deer without the forester
Only loses his way in the forest.
The superior man understands the signs of the time
And prefers to desist.
To go on brings humiliation.`,
      `Horse and wagon part.
Strive for union.
To go brings good fortune.
Everything acts to further.`,
      `Difficulties in blessing.
A little perseverance brings good fortune.
Great perseverance brings misfortune.`,
      `Horse and wagon part.
Bloody tears flow.`
    ]
  },
  {
    number: 4,
    pattern: 878887,
    symbol: `䷃`,
    name: {
      zh: `蒙`,
      en: `Youthful Folly`
    },
    judgment: `Youthful Folly has success.
It is not I who seek the young fool;
The young fool seeks me.
At the first oracle I inform him.
If he asks two or three times, it is importunity.
If he importunes, I give him no information.
Perseverance furthers.`,
    image: `A spring wells up at the foot of the mountain:
The image of Youth.
Thus the superior man fosters his character
By thoroughness in all that he does.`,
    lines: [
      `To make a fool develop
It furthers one to apply discipline.
The fetters should be removed.
To go on in this way brings humiliation.`,
      `To bear with fools in kindliness brings good fortune.
To know how to take women
Brings supreme good fortune.
The son is capable of taking charge of the household.`,
      `Take not a maiden who, when she sees a man of bronze,
Loses possession of herself.
Nothing furthers.`,
      `Entangled folly brings humiliation.`,
      `Childlike folly brings good fortune.`,
      `In punishing folly
It does not further one
To commit transgressions.
The only thing that furthers
Is to prevent transgressions.`
    ]
  },
  {
    number: 5,
    pattern: 777878,
    symbol: `䷄`,
    name: {
      zh: `需`,
      en: `Waiting [Nourishment]`
    },
    judgment: `Waiting. If you are sincere,
You have light and success.
Perseverance brings good fortune.
It furthers one to cross the great water.`,
    image: `Clouds rise up to heaven:
The image of Waiting.
Thus the superior man eats and drinks,
Is joyous and of good cheer.`,
    lines: [
      `Waiting in the meadow.
It furthers one to abide in what endures.
No blame.`,
      `Waiting on the sand.
There is some gossip.
The end brings good fortune.`,
      `Waiting in the mud
Brings about the arrival of the enemy.`,
      `Waiting in blood.
Get out of the pit.`,
      `Waiting at meat and drink.
Perseverance brings good fortune.`,
      `One falls into the pit.
Three uninvited guests arrive.
Honor them, and in the end there will be good fortune.`
    ]
  },
  {
    number: 6,
    pattern: 878777,
    symbol: `䷅`,
    name: {
      zh: `訟`,
      en: `Conflict`
    },
    judgment: `Conflict. You are sincere
And are being obstructed.
A cautious halt halfway brings good fortune.
Going through to the end brings misfortune.
It furthers one to see the great man.
It does not further one to cross the great water.`,
    image: `Heaven and water go their opposite ways:
The image of Conflict.
Thus in all his transactions the superior man
Carefully considers the beginning.`,
    lines: [
      `If one does not perpetuate the affair,
There is a little gossip.
In the end, good fortune comes.`,
      `One cannot engage in conflict;
One returns home, gives way.
The people of his town,
Three hundred households,
Remain free of guilt.`,
      `To nourish oneself on ancient virtue induces perseverance.
Danger. In the end, good fortune comes.
If by chance you are in the service of a king,
Seek not works.`,
      `One cannot engage in conflict.
One turns back and submits to fate,
Changes one's attitude,
And finds peace in perseverance.
Good fortune.`,
      `To contend before him
Brings good fortune.`,
      `Even if by chance a leather belt is bestowed on one,
By the end of a morning
It will have been snatched away three times.`
    ]
  },
  {
    number: 7,
    pattern: 878888,
    symbol: `䷆`,
    name: {
      zh: `師`,
      en: `The Army`
    },
    judgment: `The Army. The army needs perseverance
And a strong man.
Good fortune without blame.`,
    image: `In the middle of the earth is water:
The image of the Army.
Thus the superior man increases his masses
By generosity toward the people.`,
    lines: [
      `An army must set forth in proper order.
If the order is not good, misfortune threatens.`,
      `In the midst of the army.
Good fortune. No blame.
The king bestows a triple decoration.`,
      `Perchance the army carries corpses in the wagon.
Misfortune.`,
      `The army retreats. No blame.`,
      `There is game in the field.
It furthers one to catch it.
Without blame.
Let the eldest lead the army.
The younger transports corpses;
Then perseverance brings misfortune.`,
      `The great prince issues commands,
Founds states, vests families with fiefs.
Inferior people should not be employed.`
    ]
  },
  {
    number: 8,
    pattern: 888878,
    symbol: `䷇`,
    name: {
      zh: `比`,
      en: `Holding Together [Union]`
    },
    judgment: `Holding Together brings good fortune.
Inquire of the oracle once again
Whether you possess sublimity, constancy, and perseverance;
Then there is no blame.
Those who are uncertain gradually join.
Whoever comes too late
Meets with misfortune.`,
    image: `On the earth is water:
The image of Holding Together.
Thus the kings of antiquity
Bestowed the different states as fiefs
And cultivated friendly relations
With the feudal lords.`,
    lines: [
      `Hold to him in truth and loyalty;
This is without blame.
Truth, like a full earthen bowl:
Thus in the end
Good fortune comes from without.`,
      `Hold to him inwardly.
Perseverance brings good fortune.`,
      `You hold together with the wrong people.`,
      `Hold to him outwardly also.
Perseverance brings good fortune.`,
      `Manifestation of holding together.
In the hunt the king uses beaters on three sides only
And foregoes game that runs off in front.
The citizens need no warning.
Good fortune.`,
      `He finds no head for holding together.
Misfortune.`
    ]
  },
  {
    number: 9,
    pattern: 777877,
    symbol: `䷈`,
    name: {
      zh: `小畜`,
      en: `The Taming Power of the Small`
    },
    judgment: `The Taming Power of the Small
Has success.
Dense clouds, no rain from our western region.`,
    image: `The wind drives across heaven:
The image of The Taming Power of the Small.
Thus the superior man
Refines the outward aspect of his nature.`,
    lines: [
      `Return to the way.
How could there be blame in this?
Good fortune.`,
      `He allows himself to be drawn into returning.
Good fortune.`,
      `The spokes burst out of the wagon wheels.
Man and wife roll their eyes.`,
      `If you are sincere, blood vanishes and fear gives way.
No blame.`,
      `If you are sincere and loyally attached,
You are rich in your neighbor.`,
      `The rain comes, there is rest.
This is due to the lasting effect of character.
Perseverance brings the woman into danger.
The moon is nearly full.
If the superior man persists,
Misfortune comes.`
    ]
  },
  {
    number: 10,
    pattern: 778777,
    symbol: `䷉`,
    name: {
      zh: `履`,
      en: `Treading [Conduct]`
    },
    judgment: `Treading. Treading upon the tail of the tiger.
It does not bite the man. Success.`,
    image: `Heaven above, the lake below:
The image of Treading.
Thus the superior man discriminates between high and low,
And thereby fortifies the thinking of the people.`,
    lines: [
      `Simple conduct. Progress without blame.`,
      `Treading a smooth, level course.
The perseverance of a dark man
Brings good fortune.`,
      `A one-eyed man is able to see,
A lame man is able to tread.
He treads on the tail of the tiger.
The tiger bites the man.
Misfortune.
Thus does a warrior act on behalf of his great prince.`,
      `He treads on the tail of the tiger.
Caution and circumspection
Le ad ultimately to good fortune.`,
      `Resolute conduct.
Perseverance with awareness of danger.`,
      `Look to your conduct and weigh the favorable signs.
When everything is fulfilled, supreme good fortune comes.`
    ]
  },
  {
    number: 11,
    pattern: 777888,
    symbol: `䷊`,
    name: {
      zh: `泰`,
      en: `Peace`
    },
    judgment: `Peace. The small departs,
The great approaches.
Good fortune. Success.`,
    image: `Heaven and earth unite: the image of Peace.
Thus the ruler
Divides and completes the course of heaven and earth;
He furthers and regulates the gifts of heaven and earth,
And so aids the people.`,
    lines: [
      `When ribbon grass is pulled up, the sod comes with it.
Each according to his kind.
Undertakings bring good fortune.`,
      `Bearing with the uncultured in gentleness,
Fording the river with resolution,
Not neglecting what is distant,
Not regarding one's companions:
Thus one may manage to walk in the middle.`,
      `No plain not followed by a slope.
No going not followed by a return.
He who remains persevering in danger
Is without blame.
Do not complain about this truth;
enjoy the good fortune you still possess.`,
      `He flutters down, not boasting of his wealth,
Together with his neighbor,
Guileless and sincere.`,
      `The sovereign I
Gives his daughter in marriage.
This brings blessing
And supreme good fortune.`,
      `The wall falls back into the moat.
Use no army now.
Make your commands known within your own town.
Perseverance brings humiliation.`
    ]
  },
  {
    number: 12,
    pattern: 888777,
    symbol: `䷋`,
    name: {
      zh: `否`,
      en: `Standstill [Stagnation]`
    },
    judgment: `Standstill. Evil people do not further
The perseverance of the superior man.
The great departs; the small approaches.`,
    image: `Heaven and earth do not unite:
The image of Standstill.
Thus the superior man falls back upon his inner worth
In order to escape the difficulties.
He does not permit himself to be honored with revenue.`,
    lines: [
      `When ribbon grass is pulled up, the sod comes with it.
Each according to his kind.
Perseverance brings good fortune and success.`,
      `They bear and endure;
This means good fortune for inferior people.
The standstill serves to help the great man to attain success.`,
      `They bear shame.`,
      `He who acts at the command of the highest
Remains without blame.
Those of like mind partake of the blessing.`,
      `Standstill is giving way.
Good fortune for the great man.`,
      `'What if it should fail, what if it should fail?'
In this way he ties it to a cluster of mulberry shoots.`,
      `The standstill comes to an end.
First standstill, then good fortune.`
    ]
  },
  {
    number: 13,
    pattern: 787777,
    symbol: `䷌`,
    name: {
      zh: `同人`,
      en: `Fellowship with Men`
    },
    judgment: `Fellowship with Men in the open.
Success.
It furthers one to cross the great water.
The perseverance of the superior man furthers.`,
    image: `Heaven together with fire:
The image of Fellowship with Men.
Thus the superior man organizes the clans
And makes distinctions between things.`,
    lines: [
      `Fellowship with men at the gate.
No blame.`,
      `Fellowship with men in the clan.
Humiliation.`,
      `He hides weapons in the thicket;
He climbs the high hill in front of it.
For three years he does not rise up.`,
      `He climbs up on his wall; he cannot attack.
Good fortune.`,
      `Men bound in fellowship first weep and lament,
But afterward they laugh.
After great struggles they succeed in meeting.`,
      `Fellowship with men in the meadow.
No remorse.`
    ]
  },
  {
    number: 14,
    pattern: 777787,
    symbol: `䷍`,
    name: {
      zh: `大有`,
      en: `Possession in Great Measure`
    },
    judgment: `Possession in Great Measure.
Supreme success.`,
    image: `Fire in heaven above:
The image of Possession in Great Measure.
Thus the superior man curbs evil and furthers good,
And thereby obeys the benevolent will of heaven.`,
    lines: [
      `No relationship with what is harmful;
There is no blame in this.
If one remains conscious of difficulty,
One remains without blame.`,
      `A big wagon for loading.
One may undertake something.
No blame.`,
      `A prince offers it to the Son of Heaven.
A petty man cannot do this.`,
      `He makes a difference
between himself and his neighbor.
No blame.`,
      `He whose truth is accessible, yet dignified,
Has good fortune.`,
      `He is blessed by heaven.
Good fortune.
Nothing that does not further.`
    ]
  },
  {
    number: 15,
    pattern: 887888,
    symbol: `䷎`,
    name: {
      zh: `謙`,
      en: `Modesty`
    },
    judgment: `Modesty creates success.
The superior man carries things through.`,
    image: `Within the earth, a mountain:
The image of Modesty.
Thus the superior man reduces that which is too much,
And augments that which is too little.
He weighs things and makes them equal.`,
    lines: [
      `A superior man modest about his modesty
May cross the great water.
Good fortune.`,
      `Modesty that comes to expression.
Perseverance brings good fortune.`,
      `A superior man of modesty and merit
Carries things to conclusion.
Good fortune.`,
      `Nothing that would not further modesty
In movement.`,
      `No boasting of wealth before one's neighbor.
It is favorable to attack with force.
Nothing that would not further.`,
      `Modesty that comes to expression.
It is favorable to set armies marching
To chastise one's own city and one's country.`
    ]
  },
  {
    number: 16,
    pattern: 888788,
    symbol: `䷏`,
    name: {
      zh: `豫`,
      en: `Enthusiasm`
    },
    judgment: `Enthusiasm. It furthers one to install helpers
And to set armies marching.`,
    image: `Thunder comes resounding out of the earth:
The image of Enthusiasm.
Thus the ancient kings made music
In order to honor merit,
And offered it with splendor
to the Supreme Deity,
Inviting their ancestors to be present.`,
    lines: [
      `Enthusiasm that expresses itself
Brings misfortune.`,
      `Firm as a rock. Not a whole day.
Perseverance brings good fortune.`,
      `Enthusiasm that looks upward creates remorse.
Hesitation brings remorse.`,
      `The source of enthusiasm.
He achieves great things.
Doubt not.
You gather friends around you
As a hair clasp gathers the hair.`,
      `Persistently ill, and still does not die.`,
      `Deluded enthusiasm.
But if after completion one changes,
There is no blame.`
    ]
  },
  {
    number: 17,
    pattern: 788778,
    symbol: `䷐`,
    name: {
      zh: `隨`,
      en: `Following`
    },
    judgment: `Following has supreme success.
Perseverance furthers. No blame.`,
    image: `Thunder in the middle of the lake:
The image of Following.
Thus the superior man at nightfall
Goes indoors for rest and recuperation.`,
    lines: [
      `The standard is changing.
Perseverance brings good fortune.
To go out of the door in company
Produces deeds.`,
      `If one clings to the little boy,
One loses the strong man.`,
      `If one clings to the strong man,
One loses the little boy.
Through following one finds what one seeks.
It furthers one to remain persevering.`,
      `Following creates success.
Perseverance brings misfortune.
To go one's way with sincerity brings clarity.
How could there be blame in this?`,
      `Sincere in the good. Good fortune.`,
      `He meets with firm allegiance
And is still further bound.
The king introduces him
To the Western Mountain.`
    ]
  },
  {
    number: 18,
    pattern: 877887,
    symbol: `䷑`,
    name: {
      zh: `蠱`,
      en: `Work on What Has Been Spoiled [Decay]`
    },
    judgment: `Work on What Has Been Spoiled
Has supreme success.
It furthers one to cross the great water.
Before the starting point, three days.
After the starting point, three days.`,
    image: `The wind blows low on the mountain:
The image of Decay.
Thus the superior man stirs up the people
And strengthens their spirit.`,
    lines: [
      `Setting right what has been spoiled by the father.
If there is a son,
No blame rests upon the departed father.
Danger. In the end good fortune.`,
      `Setting right what has been spoiled by the mother.
One must not be too persevering.`,
      `Setting right what has been spoiled by the father.
There will be little remorse. No great blame.`,
      `Tolerating what has been spoiled by the father.
In continuing one sees humiliation.`,
      `Setting right what has been spoiled by the father.
One meets with praise.`,
      `He does not serve kings and princes,
Sets himself higher goals.`
    ]
  },
  {
    number: 19,
    pattern: 778888,
    symbol: `䷒`,
    name: {
      zh: `臨`,
      en: `Approach`
    },
    judgment: `Approach has supreme success.
Perseverance furthers.
When the eighth month comes,
There will be misfortune.`,
    image: `The earth above the lake:
The image of Approach.
Thus the superior man is inexhaustible
In his will to teach,
And without limits
In his tolerance and protection of the people.`,
    lines: [
      `Joint approach.
Perseverance brings good fortune.`,
      `Joint approach.
Good fortune.
Everything furthers.`,
      `Comfortable approach.
Nothing that would further.
If one is induced to grieve over it,
One becomes free of blame.`,
      `Complete approach.
No blame.`,
      `Wise approach.
This is right for a great prince.
Good fortune.`,
      `Greathearted approach.
Good fortune. No blame.`
    ]
  },
  {
    number: 20,
    pattern: 888877,
    symbol: `䷓`,
    name: {
      zh: `觀`,
      en: `Contemplation [View]`
    },
    judgment: `Contemplation. The ablution has been made,
But not yet the offering.
Full of trust they look up to him.`,
    image: `The wind blows over the earth:
The image of Contemplation.
Thus the kings of old visited the regions of the world,
Contemplated the people,
And gave them instruction.`,
    lines: [
      `Boylike contemplation.
For an inferior man, no blame.
For a superior man, humiliation.`,
      `Contemplation through the crack of the door.
Furthering for the perseverance of a woman.`,
      `Contemplation of my life
Decides the choice
Between advance and retreat.`,
      `Contemplation of the light of the kingdom.
It furthers one to exert influence as the guest of a king.`,
      `Contemplation of my life.
The superior man is without blame.`,
      `Contemplation of his life.
The superior man is without blame.`
    ]
  },
  {
    number: 21,
    pattern: 788787,
    symbol: `䷔`,
    name: {
      zh: `噬嗑`,
      en: `Biting Through`
    },
    judgment: `Biting Through has success.
It is favorable to let justice be administered.`,
    image: `Thunder and lightning:
The image of Biting Through.
Thus the kings of former times made firm the laws
Through clearly defined penalties.`,
    lines: [
      `His feet are fastened in the stocks,
So that his toes disappear.
No blame.`,
      `Bites through tender meat,
So that his nose disappears.
No blame.`,
      `Bites on old dried meat
And strikes on something poisonous.
Slight humiliation. No blame.`,
      `Bites on dried gristly meat.
Receives metal arrows.
It furthers one to be mindful of difficulties
And to be persevering.
Good fortune.`,
      `Bites on dried lean meat.
Receives yellow gold.
Perseveringly aware of danger.
No blame.`,
      `His neck is fastened in the wooden cangue,
So that his ears disappear.
Misfortune.`
    ]
  },
  {
    number: 22,
    pattern: 787887,
    symbol: `䷕`,
    name: {
      zh: `賁`,
      en: `Grace`
    },
    judgment: `Grace has success.
In small matters
It is favorable to undertake something.`,
    image: `Fire at the foot of the mountain:
The image of Grace.
Thus does the superior man proceed
When clearing up current affairs.
But he dare not decide controversial issues in this way.`,
    lines: [
      `He lends grace to his toes, leaves the carriage, and walks.`,
      `Lends grace to the beard on his chin.`,
      `Graceful and moist.
Constant perseverance brings good fortune.`,
      `Grace or simplicity?
A white horse comes as if on wings.
He is not a robber,
He will woo at the right time.`,
      `Grace in hills and gardens.
The roll of silk is meager and small.
Humiliation, but in the end good fortune.`,
      `Simple grace. No blame.`
    ]
  },
  {
    number: 23,
    pattern: 888887,
    symbol: `䷖`,
    name: {
      zh: `剝`,
      en: `Splitting Apart`
    },
    judgment: `Splitting Apart. It does not further one
To go anywhere.`,
    image: `The mountain rests on the earth:
The image of Splitting Apart.
Thus those above can ensure their position
Only by giving generously to those below.`,
    lines: [
      `The leg of the bed is split.
Those who persevere are destroyed.
Misfortune.`,
      `The bed is split at the edge.
Those who persevere are destroyed.
Misfortune.`,
      `He splits with them. No blame.`,
      `The bed is split up to the skin.
Misfortune.`,
      `A shoal of fishes. Favor comes through the court ladies.
Everything acts to further.`,
      `There is a large fruit still uneaten.
The superior man receives a carriage.
The house of the inferior man is split apart.`
    ]
  },
  {
    number: 24,
    pattern: 788888,
    symbol: `䷗`,
    name: {
      zh: `復`,
      en: `Return [The Turning Point]`
    },
    judgment: `Return. Success.
Going out and coming in without error.
Friends come without blame.
To and fro goes the way.
On the seventh day comes return.
It furthers one to have somewhere to go.`,
    image: `Thunder within the earth:
The image of the Turning Point.
Thus the kings of antiquity closed the passes
At the time of solstice.
Merchants and strangers did not go about,
And the ruler
Did not travel through the provinces.`,
    lines: [
      `Return from a short distance.
No need for remorse.
Great good fortune.`,
      `Quiet return. Good fortune.`,
      `Repeated return. Danger. No blame.`,
      `Walking in the midst of others,
One returns alone.`,
      `Noblehearted return. No remorse.`,
      `Missing the return. Misfortune.
Misfortune from within and without.
If armies are set marching in this way,
One will in the end suffer a great defeat,
Disastrous for the ruler of the country.
For ten years
It will not be possible to attack again.`
    ]
  },
  {
    number: 25,
    pattern: 788777,
    symbol: `䷘`,
    name: {
      zh: `無妄`,
      en: `Innocence [The Unexpected]`
    },
    judgment: `Innocence. Supreme success.
Perseverance furthers.
If someone is not as he should be,
He has misfortune,
And it does not further him
To undertake anything.`,
    image: `Under heaven thunder rolls:
All things attain the natural state of innocence.
Thus the kings of old,
Rich in virtue, and in harmony with the time,
Fostered and nourished all beings.`,
    lines: [
      `Innocent behavior brings good fortune.`,
      `If one does not count on the harvest while plowing,
Nor on the use of the ground while clearing it,
It furthers one to undertake something.`,
      `Undeserved misfortune.
The cow that was tethered by someone
Is the wanderer's gain, the citizen's loss.`,
      `He who can be persevering
Remains without blame.`,
      `Use no medicine in an illness
Incurred through no fault of your own.
It will pass of itself.`,
      `Innocent action brings misfortune.
Nothing furthers.`
    ]
  },
  {
    number: 26,
    pattern: 777887,
    symbol: `䷙`,
    name: {
      zh: `大畜`,
      en: `The Taming Power of the Great`
    },
    judgment: `The Taming Power of the Great.
Perseverance furthers.
Not eating at home brings good fortune.
It furthers one to cross the great water.`,
    image: `Heaven within the mountain:
The image of the Taming Power of the Great.
Thus the superior man acquaints himself with many sayings of antiquity
And many deeds of the past,
In order to strengthen his character thereby.`,
    lines: [
      `Danger is at hand. It furthers one to desist.`,
      `The axletrees are taken from the wagon.`,
      `A good horse that follows others.
Awareness of danger,
With perseverance, furthers.
Practice chariot driving and armed defense daily.
It furthers one to have somewhere to go.`,
      `The headboard of a young bull.
Great good fortune.`,
      `The tusk of a gelded boar.
Good fortune.`,
      `One attains the way of heaven. Success.`
    ]
  },
  {
    number: 27,
    pattern: 788887,
    symbol: `䷚`,
    name: {
      zh: `頤`,
      en: `The Corners of the Mouth`
    },
    judgment: `The Corners of the Mouth.
Perseverance brings good fortune.
Pay heed to the providing of nourishment
And to what a man seeks
To fill his own mouth with.`,
    image: `At the foot of the mountain, thunder:
The image of Providing Nourishment.
Thus the superior man is careful of his words
And temperate in eating and drinking.`,
    lines: [
      `You let your magic tortoise go,
And look at me with the corners of your mouth drooping.
Misfortune.`,
      `Turning to the summit for nourishment,
Deviating from the path
To seek nourishment from the hill.
Continuing to do this brings misfortune.`,
      `Turning away from nourishment.
Perseverance brings misfortune.
Do not act thus for ten years.
Nothing serves to further.`,
      `Turning to the summit
For provision of nourishment
Brings good fortune.
Spying about with sharp eyes
Like a tiger with insatiable craving.
No blame.`,
      `Turning away from the path.
To remain persevering brings good fortune.
One should not cross the great water.`,
      `The source of nourishment.
Awareness of danger brings good fortune.
It furthers one to cross the great water.`
    ]
  },
  {
    number: 28,
    pattern: 877778,
    symbol: `䷛`,
    name: {
      zh: `大過`,
      en: `Preponderance of the Great`
    },
    judgment: `Preponderance of the Great.
The ridgepole sags to the breaking point.
It furthers one to have somewhere to go.
Success.`,
    image: `The lake rises above the trees:
The image of Preponderance of the Great.
Thus the superior man, when he stands alone,
Is unconcerned,
And if he has to renounce the world,
He is undaunted.`,
    lines: [
      `To spread white rushes underneath.
No blame.`,
      `A dry poplar sprouts at the root.
An older man takes a young wife.
Everything furthers.`,
      `The ridgepole sags to the breaking point.
Misfortune.`,
      `The ridgepole is braced. Good fortune.
If there are ulterior motives, it is humiliating.`,
      `A withered poplar puts forth flowers.
An older woman takes a husband.
No blame. No praise.`,
      `One must go through the water.
It goes over one's head.
Misfortune. No blame.`
    ]
  },
  {
    number: 29,
    pattern: 878878,
    symbol: `䷜`,
    name: {
      zh: `坎`,
      en: `The Abysmal [Water]`
    },
    judgment: `The Abysmal repeated.
If you are sincere, you have success in your heart,
And whatever you do succeeds.`,
    image: `Water flows on uninterruptedly and reaches its goal:
The image of the Abysmal repeated.
Thus the superior man walks in lasting virtue
And carries on the business of teaching.`,
    lines: [
      `Repetition of the Abysmal.
In the abyss one falls into a pit.
Misfortune.`,
      `The abyss is dangerous.
One should strive to attain small things only.`,
      `Forward and backward, abyss on abyss.
In danger like this, pause at first and wait,
Otherwise you will fall into a pit in the abyss.
Do not act in this way.`,
      `A jug of wine, a bowl of rice with it;
Earthen vessels
Simply handed in through the window.
There is certainly no blame in this.`,
      `The abyss is not filled to overflowing,
It is filled only to the rim.
No blame.`,
      `Bound with cords and ropes,
Shut in between thorn-hedged prison walls:
For three years one does not find the way.
Misfortune.`
    ]
  },
  {
    number: 30,
    pattern: 787787,
    symbol: `䷝`,
    name: {
      zh: `離`,
      en: `The Clinging, Fire`
    },
    judgment: `The Clinging. Perseverance furthers.
It brings success.
Care of the cow brings good fortune.`,
    image: `That which is bright rises twice:
The image of Fire.
Thus the great man, by perpetuating this brightness,
Illumines the four quarters of the world.`,
    lines: [
      `The footprints run crisscross.
If one is seriously intent, no blame.`,
      `Yellow light. Supreme good fortune.`,
      `In the light of the setting sun,
Men either beat the pot and sing
Or loudly bewail the approach of old age.
Misfortune.`,
      `Its coming is sudden;
It flames up, dies down, is thrown away.`,
      `Tears in floods, sighing and lamenting.
Good fortune.`,
      `The king uses him to march forth and chastise.
Then it is best to kill the leaders
And take captive the followers. No blame.`
    ]
  },
  {
    number: 31,
    pattern: 887778,
    symbol: `䷞`,
    name: {
      zh: `咸`,
      en: `Influence [Wooing]`
    },
    judgment: `Influence. Success.
Perseverance furthers.
To take a maiden to wife brings good fortune.`,
    image: `A lake on the mountain:
The image of Influence.
Thus the superior man encourages people to approach him
By his readiness to receive them.`,
    lines: [
      `The influence shows itself in the big toe.`,
      `The influence shows itself in the calves of the legs.
Misfortune.
Tarrying brings good fortune.`,
      `The influence shows itself in the thighs.
Holds to that which follows it.
To continue is humiliating.`,
      `Perseverance brings good fortune.
Remorse disappears.
If a man is agitated in mind,
And his thoughts go hither and thither,
Only those friends
On whom he fixes his conscious thoughts
Will follow.`,
      `The influence shows itself in the back of the neck.
No remorse.`,
      `The influence shows itself in the jaws, cheeks, and tongue.`
    ]
  },
  {
    number: 32,
    pattern: 877788,
    symbol: `䷟`,
    name: {
      zh: `恆`,
      en: `Duration`
    },
    judgment: `Duration. Success. No blame.
Perseverance furthers.
It furthers one to have somewhere to go.`,
    image: `Thunder and wind: the image of Duration.
Thus the superior man stands firm
And does not change his direction.`,
    lines: [
      `Seeking duration too hastily brings misfortune persistently.
Nothing that would further.`,
      `Remorse disappears.`,
      `He who does not give duration to his character
Meets with disgrace.
Persistent humiliation.`,
      `No game in the field.`,
      `Giving duration to one's character through perseverance.
This is good fortune for a woman, misfortune for a man.`,
      `Restlessness as an enduring condition brings misfortune.`
    ]
  },
  {
    number: 33,
    pattern: 887777,
    symbol: `䷠`,
    name: {
      zh: `遯`,
      en: `Retreat`
    },
    judgment: `Retreat. Success.
In what is small, perseverance furthers.`,
    image: `Mountain under heaven: the image of Retreat.
Thus the superior man keeps the inferior man at a distance,
Not angrily but with reserve.`,
    lines: [
      `At the tail in retreat. This is dangerous.
One must not wish to undertake anything.`,
      `He holds him fast with yellow oxhide.
No one can tear him loose.`,
      `A halted retreat
Is nerve-wracking and dangerous.
To retain people as men- and maidservants
Brings good fortune.`,
      `Voluntary retreat brings good fortune to the superior man
And downfall to the inferior man.`,
      `Friendly retreat. Perseverance brings good fortune.`,
      `Cheerful retreat. Everything serves to further.`
    ]
  },
  {
    number: 34,
    pattern: 777788,
    symbol: `䷡`,
    name: {
      zh: `大壯`,
      en: `The Power of the Great`
    },
    judgment: `The Power of the Great. Perseverance furthers.`,
    image: `Thunder in heaven above:
The image of the Power of the Great.
Thus the superior man does not tread upon paths
That do not accord with established order.`,
    lines: [
      `Power in the toes.
Continuing brings misfortune.
This is certainly true.`,
      `Perseverance brings good fortune.`,
      `The inferior man works through power.
The superior man does not act thus.
To continue is dangerous.
A goat butts against a hedge
And gets its horns entangled.`,
      `Perseverance brings good fortune.
Remorse disappears.
The hedge opens; there is no entanglement.
Power depends upon the axle of a big cart.`,
      `Loses the goat with ease.
No remorse.`,
      `A goat butts against a hedge.
It cannot go backward, it cannot go forward.
Nothing serves to further.
If one notes the difficulty, this brings good fortune.`
    ]
  },
  {
    number: 35,
    pattern: 888787,
    symbol: `䷢`,
    name: {
      zh: `晉`,
      en: `Progress`
    },
    judgment: `Progress. The powerful prince
Is honored with horses in large numbers.
In a single day he is granted audience three times.`,
    image: `The sun rises over the earth:
The image of Progress.
Thus the superior man himself
Brightens his bright virtue.`,
    lines: [
      `Progressing, but turned back.
Perseverance brings good fortune.
If one meets with no confidence, one should remain calm.
No mistake.`,
      `Progressing, but in sorrow.
Perseverance brings good fortune.
Then one obtains great happiness from one's ancestress.`,
      `All are in accord. Remorse disappears.`,
      `Progress like a hamster.
Perseverance brings danger.`,
      `Remorse disappears.
Take not gain and loss to heart.
Undertakings bring good fortune.
Everything serves to further.`,
      `Making progress with the horns is permissible
Only for the purpose of punishing one's own city.
To be conscious of danger brings good fortune.
No blame.
Perseverance brings humiliation.`
    ]
  },
  {
    number: 36,
    pattern: 787888,
    symbol: `䷣`,
    name: {
      zh: `明夷`,
      en: `Darkening of the Light`
    },
    judgment: `Darkening of the Light. In adversity
It furthers one to be persevering.`,
    image: `The light has sunk into the earth:
The image of Darkening of the Light.
Thus does the superior man live with the great mass:
He veils his light, yet still shines.`,
    lines: [
      `Darkening of the light during flight.
He lowers his wings.
The superior man does not eat for three days
On his wanderings.
But he has somewhere to go.
The host has occasion to gossip about him.`,
      `Darkening of the light injures him in the left thigh.
He gives aid with the strength of a horse.
Good fortune.`,
      `Darkening of the light during the hunt in the south.
Their great leader is captured.
One must not expect perseverance too soon.`,
      `He penetrates the left side of the belly.
One gets at the very heart of the darkening of the light,
And leaves gate and courtyard.`,
      `Darkening of the light as with Prince Chi.
Perseverance furthers.`,
      `Not light but darkness.
First he climbed up to heaven,
Then he plunged into the depths of the earth.`
    ]
  },
  {
    number: 37,
    pattern: 787877,
    symbol: `䷤`,
    name: {
      zh: `家人`,
      en: `The Family [The Clan]`
    },
    judgment: `The Family. The perseverance of the woman furthers.`,
    image: `Wind comes forth from fire:
The image of the Family.
Thus the superior man has substance in his words
And duration in his way of life.`,
    lines: [
      `Firm seclusion within the family.
Remorse disappears.`,
      `She should not follow her whims.
She must attend within to the food.
Perseverance brings good fortune.`,
      `When tempers flare up in the family,
Too great severity brings remorse.
Good fortune nonetheless.
When woman and child dally and laugh,
It leads in the end to humiliation.`,
      `She is the treasure of the house.
Great good fortune.`,
      `As a king he approaches his family.
Fear not.
Good fortune.`,
      `His work commands respect.
In the end good fortune comes.`
    ]
  },
  {
    number: 38,
    pattern: 778787,
    symbol: `䷥`,
    name: {
      zh: `睽`,
      en: `Opposition`
    },
    judgment: `Opposition. In small matters, good fortune.`,
    image: `Above, fire; below, the lake:
The image of Opposition.
Thus amid all fellowship
The superior man retains his individuality.`,
    lines: [
      `Remorse disappears.
If you lose your horse, do not run after it;
It will come back of its own accord.
When you see evil people,
Guard yourself against mistakes.`,
      `One meets his lord in a narrow street.
No blame.`,
      `One sees the wagon dragged back,
The oxen halted,
A man's hair and nose cut off.
Not a good beginning, but a good end.`,
      `Isolated through opposition,
One meets a like-minded man
With whom one can associate in good faith.
Despite the danger, no blame.`,
      `Remorse disappears.
The companion bites his way through the wrappings.
If one goes to him,
How could it be a mistake?`,
      `Isolated through opposition,
One sees one's companion as a pig covered with dirt,
As a wagon full of devils.
First one draws a bow against him,
Then one lays the bow aside.
He is not a robber; he will woo at the right time.
As one goes, rain falls; then good fortune comes.`
    ]
  },
  {
    number: 39,
    pattern: 887878,
    symbol: `䷦`,
    name: {
      zh: `蹇`,
      en: `Obstruction`
    },
    judgment: `Obstruction. The southwest furthers.
The northeast does not further.
It furthers one to see the great man.
Perseverance brings good fortune.`,
    image: `Water on the mountain:
The image of Obstruction.
Thus the superior man turns his attention to himself
And molds his character.`,
    lines: [
      `Going leads to obstructions,Coming meets with praise.`,
      `The king's servant is beset by obstruction upon obstruction,
But it is not his own fault.`,
      `Going leads to obstructions;
Hence he comes back.`,
      `Going leads to obstructions,
Coming leads to union.`,
      `In the midst of the greatest obstructions,
Friends come.`,
      `Going leads to obstructions,
Coming leads to great good fortune.
It furthers one to see the great man.`
    ]
  },
  {
    number: 40,
    pattern: 878788,
    symbol: `䷧`,
    name: {
      zh: `解`,
      en: `Deliverance`
    },
    judgment: `Deliverance. The southwest furthers.
If there is no longer anything where one has to go,
Return brings good fortune.
If there is still something where one has to go,
Hastening brings good fortune.`,
    image: `Thunder and rain set in:
The image of Deliverance.
Thus the superior man pardons mistakes
And forgives misdeeds.`,
    lines: [
      `Without blame.`,
      `One kills three foxes in the field
And receives a yellow arrow.
Perseverance brings good fortune.`,
      `If a man carries a burden on his back
And nonetheless rides in a carriage,
He thereby encourages robbers to draw near.
Perseverance leads to humiliation.`,
      `Deliver yourself from your great toe.
Then the companion comes,
And him you can trust.`,
      `If only the superior man can deliver himself,
It brings good fortune.
Thus he proves to inferior men that he is in earnest.`,
      `The prince shoots at a hawk on a high wall.
He kills it. Everything serves to further.`
    ]
  },
  {
    number: 41,
    pattern: 778887,
    symbol: `䷨`,
    name: {
      zh: `解`,
      en: `Decrease`
    },
    judgment: `Decrease combined with sincerity
Brings about supreme good fortune
Without blame.
One may be persevering in this.
It furthers one to undertake something.
How is this to be carried out?
One may use two small bowls for the sacrifice.`,
    image: `At the foot of the mountain, the lake:
The image of Decrease.
Thus the superior man controls his anger
And restrains his instincts.`,
    lines: [
      `Going quickly when one's tasks are finished
Is without blame.
But one must reflect on how much one may decrease others.`,
      `Perseverance furthers.
To undertake something brings misfortune.
Without decreasing oneself,
One is able to bring increase to others.`,
      `When three people journey together,
Their number decreases by one.
When one man journeys alone,
He finds a companion.`,
      `If a man decreases his faults,
It makes the other hasten to come and rejoice.
No blame.`,
      `Someone does indeed increase him.
Ten pairs of tortoises cannot oppose it.
Supreme good fortune.`,
      `If one is increased without depriving others,
There is no blame.
Perseverance brings good fortune.
It furthers one to undertake something.
One obtains servants
But no longer has a separate home.`
    ]
  },
  {
    number: 42,
    pattern: 788877,
    symbol: `䷩`,
    name: {
      zh: `益`,
      en: `Increase`
    },
    judgment: `Increase. It furthers one
To undertake something.
It furthers one to cross the great water.`,
    image: `Wind and thunder: the image of Increase.
Thus the superior man:
If he sees good, he imitates it;
If he has faults, he rids himself of them.`,
    lines: [
      `It furthers one to accomplish great deeds.
Supreme good fortune. No blame.`,
      `Someone does indeed increase him;
Ten pairs of tortoises cannot oppose it.
Constant perseverance brings good fortune.
The king presents him before God.
Good fortune.`,
      `One is enriched through unfortunate events.
No blame, if you are sincere
And walk in the middle,
And report with a seal to the prince.`,
      `If you walk in the middle
And report to the prince,
He will follow.
It furthers one to be used
In the removal of the capital.`,
      `If in truth you have a kind heart, ask not.
Supreme good fortune.
Truly, kindness will be recognized as your virtue.`,
      `He brings increase to no one.
Indeed, someone even strikes him.
He does not keep his heart constantly steady.
Misfortune.`
    ]
  },
  {
    number: 43,
    pattern: 777778,
    symbol: `䷪`,
    name: {
      zh: `夬`,
      en: `Break-through [Resoluteness]`
    },
    judgment: `Break-through. One must resolutely make the matter known
At the court of the king.
It must be announced truthfully. Danger.
It is necessary to notify one's own city.
It does not further to resort to arms.
It furthers one to undertake something.`,
    image: `The lake has risen up to heaven:
The image of Break-through.
Thus the superior man
Dispenses riches downward
And refrains from resting on his virtue.`,
    lines: [
      `Mighty in the forward-striding toes.
When one goes and is not equal to the task,
One makes a mistake.`,
      `A cry of alarm. Arms at evening and at night.
Fear nothing.`,
      `To be powerful in the cheekbones
Brings misfortune.
The superior man is firmly resolved.
He walks alone and is caught in the rain.
He is bespattered,
And people murmur against him.
No blame.`,
      `There is no skin on his thighs,
And walking comes hard.
If a man were to let himself be led like a sheep,
Remorse would disappear.
But if these words are heard
They will not be believed.`,
      `In dealing with weeds,
Firm resolution is necessary.
Walking in the middle
Remains free of blame.`,
      `No cry.
In the end misfortune comes.`
    ]
  },
  {
    number: 44,
    pattern: 877777,
    symbol: `䷫`,
    name: {
      zh: `姤`,
      en: `Coming to Meet`
    },
    judgment: `Coming to Meet. The maiden is powerful.
One should not marry such a maiden.`,
    image: `Under heaven, wind:
The image of Coming to Meet.
Thus does the prince act when disseminating his commands
And proclaiming them to the four quarters of heaven.`,
    lines: [
      `It must be checked with a brake of bronze.
Perseverance brings good fortune.
If one lets it take its course, one experiences misfortune.
Even a lean pig has it in him to rage around.`,
      `There is a fish in the tank. No blame.
Does not further guests.`,
      `There is no skin on his thighs,
And walking comes hard.
If one is mindful of the danger,
No great mistake is made.`,
      `No fish in the tank.
This leads to misfortune.`,
      `A melon covered with willow leaves.
Hidden lines.
Then it drops down to one from heaven.`,
      `He comes to meet with his horns.
Humiliation. No blame.`
    ]
  },
  {
    number: 45,
    pattern: 888778,
    symbol: `䷬`,
    name: {
      zh: `萃`,
      en: `Gathering Together [Massing]`
    },
    judgment: `Gathering Together. Success.
The king approaches his temple.
It furthers one to see the great
This brings success. Perseverance furthers.
To bring great offerings creates good fortune.
It furthers one to undertake something.`,
    image: `Over the earth, the lake:
The image of Gathering Together.
Thus the superior man renews his weapons
In order to meet the unforseen.`,
    lines: [
      `If you are sincere, but not to the end,
There will sometimes be confusion, sometimes gathering together.
If you call out,
Then after one grasp of the hand you can laugh again.
Regret not. Going is without blame.`,
      `Letting oneself be drawn
Brings good fortune and remains blameless.
If one is sincere,
It furthers one to bring even a small offering.
`,
      `Gathering together amid sighs.Nothing that would further.
Going is without blame.
Slight humiliation.`,
      `Great good fortune. No blame.`,
      `If in gathering together one has position,
This brings no blame.
If there are some who are not yet sincerely in the work,
Sublime and enduring perseverance is needed.
Then remorse disappears.`,
      `Lamenting and sighing, floods of tears.
No blame.`
    ]
  },
  {
    number: 46,
    pattern: 877888,
    symbol: `䷭`,
    name: {
      zh: `升`,
      en: `Pushing Upward`
    },
    judgment: `Pushing Upward has supreme success.
One must see the great man.
Fear not.
Departure toward the south
Brings good fortune.`,
    image: `Within the earth, wood grows:
The image of Pushing Upward.
Thus the superior man of devoted character
Heaps up small things
In order to achieve something high and great.`,
    lines: [
      `Pushing upward that meets with confidence
Brings great good fortune.`,
      `If one is sincere,
It furthers one to bring even a small offering.
No blame.`,
      `One pushes upward into an empty city.`,
      `The king offers him Mount Ch'i.
Good fortune. No blame.`,
      `Perseverance brings good fortune.
One pushes upward by steps.`,
      `Pushing upward in darkness.
It furthers one
To be unremittingly persevering.`
    ]
  },
  {
    number: 47,
    pattern: 878778,
    symbol: `䷮`,
    name: {
      zh: `困`,
      en: `Oppression [Exhaustion]`
    },
    judgment: `Oppression. Success. Perseverance.
The great man brings about good fortune.
No blame.
When one has something to say,
It is not believed.`,
    image: `There is no water in the lake:
The image of Exhaustion.
Thus the superior man stakes his life
On following his will.`,
    lines: [
      `One sits oppressed under a bare tree
And strays into a gloomy valley.
For three years one sees nothing.`,
      `One is oppressed while at meat and drink.
The man with the scarlet knee bands is just coming.
It furthers one to offer sacrifice.
To set forth brings misfortune.
No blame.`,
      `A man permits himself to be oppressed by stone,
And leans on thorns and thistles.
He enters his house and does not see his wife.
Misfortune.`,
      `He comes very quietly, oppressed in a golden carriage.
Humiliation, but the end is reached.`,
      `His nose and feet are cut off.
Oppression at the hands of the man with the purple knee bands.
Joy comes softly.
It furthers one to make offerings and libations.`,
      `He is oppressed by creeping vines.
He moves uncertainly and says, 'Movement brings remorse.'
If one feels remorse over this and makes a start,
Good fortune comes.`
    ]
  },
  {
    number: 48,
    pattern: 877878,
    symbol: `䷯`,
    name: {
      zh: `井`,
      en: `The Well`
    },
    judgment: `The Well. The town may be changed,
But the well cannot be changed.
It neither decreases nor increases.
They come and go and draw from the well.
If one gets down almost to the water
And the rope does not go all the way,
Or the jug breaks, it brings misfortune.`,
    image: `Water over wood: the image of the Well.
Thus the superior man encourages the people at their work,
And exhorts them to help one another.`,
    lines: [
      `One does not drink the mud of the well.
No animals come to an old well.`,
      `At the wellhole one shoots fishes.
The jug is broken and leaks.`,
      `The well is cleaned, but no one drinks from it.
This is my heart's sorrow,
For one might draw from it.
If the king were clear-minded,
Good fortune might be enjoyed in common.`,
      `The well is being lined. No blame.`,
      `In the well there is a clear, cold spring
From which one can drink.`,
      `One draws from the well
Without hindrance.
It is dependable.
Supreme good fortune.`
    ]
  },
  {
    number: 49,
    pattern: 787778,
    symbol: `䷰`,
    name: {
      zh: `革`,
      en: `Revolution [Molting]`
    },
    judgment: `Revolution. On your own day
You are believed.
Supreme success,
Furthering through perseverance.
Remorse disappears.`,
    image: `Fire in the lake: the image of Revolution.
Thus the superior man
Sets the calendar in order
And makes the seasons clear.`,
    lines: [
      `Wrapped in the hide of a yellow cow.`,
      `When one's own day comes, one may create revolution.
Starting brings good fortune. No blame.`,
      `Starting brings misfortune.
Perseverance brings danger.
When talk of revolution has gone the rounds three times,
One may commit himself,
And men will believe him.`,
      `Remorse disappears. Men believe him.
Changing the form of government brings good fortune.`,
      `The great man changes like a tiger.
Even before he questions the oracle
He is believed.`,
      `The superior man changes like a panther.
The inferior man molts in the face.
Starting brings misfortune.
To remain persevering brings good fortune.`
    ]
  },
  {
    number: 50,
    pattern: 877787,
    symbol: `䷱`,
    name: {
      zh: `鼎`,
      en: `The Cauldron`
    },
    judgment: `The Cauldron. Supreme good fortune.
Success.`,
    image: `Fire over wood:
The image of the Cauldron.
Thus the superior man consolidates his fate
By making his position correct.`,
    lines: [
      `A cauldron with legs upturned.
Furthers removal of stagnating stuff.
One takes a concubine for the sake of her son.
No blame.`,
      `There is food in the vessel.
My comrades are envious,.But they cannot harm me.
Good fortune.`,
      `The handle of the vessel is altered.
One is impeded in his way of life.
The fat of the pheasant is not eaten.
Once rain falls, remorse is spent.
Good fortune comes in the end.`,
      `The legs of the vessel are broken.
The prince's meal is spilled
And his person is soiled.
Misfortune.`,
      `The vessel has yellow handles, golden carrying rings.
Perseverance furthers.`,
      `The vessel has rings of jade.
Great good fortune.
Nothing that would not act to further.`
    ]
  },
  {
    number: 51,
    pattern: 788788,
    symbol: `䷲`,
    name: {
      zh: `震`,
      en: `The Arousing [Shock, Thunder]`
    },
    judgment: `Shock brings success.
Shock comes - frightening, oh!
Laughing words - shrieking, ha!
The shock terrifies for a hundred miles,
And he does not let fall the sacrificial spoon and chalice.`,
    image: `Thunder repeated: the image of Shock.
Thus in fear and trembling
The superior man sets his life in order
And examines himself.`,
    lines: [
      `Shock comes - frightening, oh!
Then follow laughing words - shrieking, ha!
Good fortune.`,
      `Shock comes bringing danger.
A hundred thousand times
You lose your treasures
And must climb the nine hills.
Do not go in pursuit of them.
After seven days you will get them back.`,
      `Shock comes and makes one distraught.
If shock spurs to action
One remains free of misfortune.`,
      `Shock is mired.`,
      `Shock goes hither and thither.
Danger.
However, nothing at all is lost.
Yet there are things to be done.`,
      `Shock brings ruin and terrified gazing around.
Going ahead brings misfortune.
If it has not yet touched one's own body
But has reached one's neighbor first,
There is no blame.
One's comrades have something to talk about.`
    ]
  },
  {
    number: 52,
    pattern: 887887,
    symbol: `䷳`,
    name: {
      zh: `艮`,
      en: ` Keeping Still, Mountain`
    },
    judgment: `Keeping Still. Keeping his back still
So that he no longer feels his body.
He goes into his courtyard
And does not see his people.
No blame.`,
    image: `Mountains standing close together:
The image of Keeping Still.
Thus the superior man
Does not permit his thoughts
To go beyond his situation.`,
    lines: [
      `Keeping his toes still.
No blame.
Continued perseverance furthers.`,
      `Keeping his calves still.
He cannot rescue him whom he follows.
His heart is not glad.`,
      `Keeping his hips still.
Making his sacrum stiff.
Dangerous. The heart suffocates.`,
      `Keeping his trunk still.
No blame.`,
      `Keeping his jaws still.
The words have order.
Remorse disappears.`,
      `Noblehearted keeping still.
Good fortune.`
    ]
  },
  {
    number: 53,
    pattern: 887877,
    symbol: `䷴`,
    name: {
      zh: `漸`,
      en: `Development [Gradual Progress]`
    },
    judgment: `Development. The maiden
Is given in marriage.
Good fortune.
Perseverance furthers.`,
    image: `On the mountain, a tree:
The image of Development.
Thus the superior man abides in dignity and virtue,
In order to improve the mores.`,
    lines: [
      `The wild goose gradually draws near the shore.
The young son is in danger.
There is talk. No blame.`,
      `The wild goose gradually draws near the cliff.
Eating and drinking in peace and concord.
Good fortune.`,
      `The wild goose gradually draws near the plateau.
The man goes forth and does not return.
The woman carries a child but does not bring it forth.
Misfortune.
It furthers one to fight off robbers.`,
      `The wild goose gradually draws near the tree.
Perhaps it will find a flat branch. No blame.`,
      `The wild goose gradually draws near the summit.
For three years the woman has no child.
In the end nothing can hinder her.
Good fortune.`,
      `The wild goose gradually draws near the cloud heights.
Its feathers can be used for the sacred dance.
Good fortune.`
    ]
  },
  {
    number: 54,
    pattern: 778788,
    symbol: `䷵`,
    name: {
      zh: `歸妹`,
      en: `The Marrying Maiden`
    },
    judgment: `The Marrying Maiden.
Undertakings bring misfortune.
Nothing that would further.`,
    image: `Thunder over the lake:
The image of the Marrying Maiden.
Thus the superior man
Understands the transitory
In the light of the eternity of the end.`,
    lines: [
      `The marrying maiden as a concubine.
A lame man who is able to tread.
Undertakings bring good fortune.`,
      `A one-eyed man who is able to see.
The perseverance of a solitary man furthers.`,
      `The marrying maiden as a slave.
She marries as a concubine.`,
      `The marrying maiden draws out the allotted time.
A late marriage comes in due course.`,
      `The sovereign I gave his daughter in marriage.
The embroidered garments of the princess
Were not as gorgeous
As those of the servingmaid.
The moon that is nearly full
Brings good fortune.`,
      `The woman holds the basket, but there are no fruits in it.
The man stabs the sheep, but no blood flows.
Nothing that acts to further.`
    ]
  },
  {
    number: 55,
    pattern: 787788,
    symbol: `䷶`,
    name: {
      zh: `豐`,
      en: `Abundance [Fullness]`
    },
    judgment: `Abundance has success.
The king attains abundance.
Be not sad.
Be like the sun at midday.`,
    image: `Both thunder and lightning come:
The image of Abundance.
Thus the superior man decides lawsuits
And carries out punishments.`,
    lines: [
      `When a man meets his destined ruler,
They can be together ten days,
And it is not a mistake.
Going meets with recognition.`,
      `The curtain is of such fullness
That the polestars can be seen at noon.
Through going one meets with mistrust and hate.
If one rouses him through truth,
Good fortune comes.`,
      `The underbrush is of such abundance
That the small stars can be seen at noon.
He breaks his right arm. No blame.`,
      `The curtain is of such fullness
That the polestars can be seen at noon.
He meets his ruler, who is of like kind.
Good fortune.`,
      `Lines are coming,
Blessing and fame draw near.
Good fortune.`,
      `His house is in a state of abundance.
He screens off his family.
He peers through the gate
And no longer perceives anyone.
For three years he sees nothing.
Misfortune.`
    ]
  },
  {
    number: 56,
    pattern: 887787,
    symbol: `䷷`,
    name: {
      zh: `旅`,
      en: `The Wanderer`
    },
    judgment: `The Wanderer. Success through smallness.
Perseverance brings good fortune
To the wanderer.`,
    image: `Fire on the mountain:
The image of the Wanderer.
Thus the superior man
Is clear-minded and cautious
In imposing penalties,
And protracts no lawsuits.`,
    lines: [
      `If the wanderer busies himself with trivial things,
He draws down misfortune upon himself.`,
      `The wanderer comes to an inn.
He has his property with him.
He wins the steadfastness of a young servant.`,
      `The wanderer's inn burns down.
He loses the steadfastness of his young servant.
Danger.`,
      `The wanderer rests in a shelter.
He obtains his property and an ax.
My heart is not glad.`,
      `He shoots a pheasant.
It drops with the first arrow.
In the end this brings both praise and office.`,
      `The bird's nest burns up.
The wanderer laughs at first,
Then must needs lament and weep.
Through carelessness he loses his cow.
Misfortune.`
    ]
  },
  {
    number: 57,
    pattern: 877877,
    symbol: `䷸`,
    name: {
      zh: `巽`,
      en: `The Gentle [The Penetrating, Wind]`
    },
    judgment: `The Gentle. Success through what is small.
It furthers one to have somewhere to go.
It furthers one to see the great man.`,
    image: `Winds following one upon the other:
The image of the Gently Penetrating.
Thus the superior man
Spreads his commands abroad
And carries out his undertakings.`,
    lines: [
      `In advancing and in retreating,
The perseverance of a warrior furthers.`,
      `Penetration under the bed.
Priests and magicians are used in great number.
Good fortune. No blame.`,
      `Repeated penetration. Humiliation.`,
      `Remorse vanishes.
During the hunt
Three kinds of game are caught.`,
      `Perseverance brings good fortune.
Remorse vanishes.
Nothing that does not further.
No beginning, but an end.
Before the change, three days.
After the change, three days.
Good fortune.`,
      `Penetration under the bed.
He loses his property and his ax.
Perseverance brings misfortune.`
    ]
  },
  {
    number: 58,
    pattern: 778778,
    symbol: `䷹`,
    name: {
      zh: `兌`,
      en: `The Joyous, Lake`
    },
    judgment: `The Joyous. Success.
Perseverance is favorable.`,
    image: `Lakes resting one on the other:
The image of the Joyous.
Thus the superior man joins with his friends
For discussion and practice.`,
    lines: [
      `Contented joyousness. Good fortune.`,
      `Sincere joyousness. Good fortune.
Remorse disappears.`,
      `Coming joyousness. Misfortune.`,
      `Joyousness that is weighed is not at peace.
After ridding himself of mistakes a man has joy.`,
      `Sincerity toward disintegrating influences is dangerous.`,
      `Seductive joyousness.`
    ]
  },
  {
    number: 59,
    pattern: 878877,
    symbol: `䷺`,
    name: {
      zh: `渙`,
      en: `Dispersion [Dissolution]`
    },
    judgment: `Dispersion. Success.
The king approaches his temple.
It furthers one to cross the great water.
Perseverance furthers.`,
    image: `The wind drives over the water:
The image of Dispersion.
Thus the kings of old sacrificed to the Lord
And built temples.`,
    lines: [
      `He brings help with the strength of a horse.
Good fortune.`,
      `At the dissolution
He hurries to that which supports him.
Remorse disappears.`,
      `He dissolves his self. No remorse.`,
      `He dissolves his bond with his group.
Supreme good fortune.
Dispersion leads in turn to accumulation.
This is something that ordinary men do not think of.`,
      `His loud cries are as dissolving as sweat.
Dissolution. A king abides without blame.`,
      `He dissolves his blood.
Departing, keeping at a distance, going out,
Is without blame.`
    ]
  },
  {
    number: 60,
    pattern: 778878,
    symbol: `䷻`,
    name: {
      zh: `節`,
      en: `Limitation`
    },
    judgment: `Limitation. Success.
Galling limitation must not be persevered in.`,
    image: `Water over lake: the image of Limitation.
Thus the superior man
Creates number and measure,
And examines the nature of virtue and correct conduct.`,
    lines: [
      `Not going out of the door and the courtyard
Is without blame.`,
      `Not going out of the gate and the courtyard
Brings misfortune.`,
      `He who knows no limitation
Will have cause to lament.
No blame.`,
      `Contented limitation. Success.`,
      `Sweet limitation brings good fortune.
Going brings esteem.`,
      `Galling limitation.
Perseverance brings misfortune.
Remorse disappears.`
    ]
  },
  {
    number: 61,
    pattern: 778877,
    symbol: `䷼`,
    name: {
      zh: `中孚`,
      en: `Inner Truth`
    },
    judgment: `Inner Truth. Pigs and fishes.
Good fortune.
It furthers one to cross the great water.
Perseverance furthers.`,
    image: `Wind over lake: the image of Inner Truth.
Thus the superior man discusses criminal cases
In order to delay executions.`,
    lines: [
      `Being prepared brings good fortune.
If there are secret designs, it is disquieting.`,
      `A crane calling in the shade.
Its young answers it.
I have a good goblet.
I will share it with you.`,
      `He finds a comrade.
Now he beats the drum, now he stops.
Now he sobs, now he sings.`,
      `The moon nearly at the full.
The team horse goes astray.
No blame.`,
      `He possesses truth, which links together.
No blame.`,
      `Cockcrow penetrating to heaven.
Perseverance brings misfortune.`
    ]
  },
  {
    number: 62,
    pattern: 887788,
    symbol: `䷽`,
    name: {
      zh: `小過`,
      en: `Preponderance of the Small`
    },
    judgment: `Preponderance of the Small. Success.
Perseverance furthers.
Small things may be done; great things should not be done.
The flying bird brings the message:
It is not well to strive upward,
It is well to remain below.
Great good fortune.`,
    image: `Thunder on the mountain:
The image of Preponderance of the Small.
Thus in his conduct the superior man gives preponderance to reverence.
In bereavement he gives preponderance to grief.
In his expenditures he gives preponderance to thrift.`,
    lines: [
      `The bird meets with misfortune through flying.`,
      `She passes by her ancestor
And meets her ancestress.
He does not reach his prince
And meets the official.
No blame.`,
      `If one is not extremely careful,
Somebody may come up from behind and strike him.
Misfortune.`,
      `No blame. He meets him without passing by.
Going brings danger. One must be on guard.
Do not act. Be constantly persevering.`,
      `Dense clouds,
No rain from our western territory.
The prince shoots and hits him who is in the cave.`,
      `He passes him by, not meeting him.
The flying bird leaves him.
Misfortune.
This means bad luck and injury.`
    ]
  },
  {
    number: 63,
    pattern: 787878,
    symbol: `䷾`,
    name: {
      zh: `既濟`,
      en: `After Completion`
    },
    judgment: `After Completion. Success in small matters.
Perseverance furthers.
At the beginning good fortune,
At the end disorder.`,
    image: `Water over fire: the image of the condition
In After Completion.
Thus the superior man
Takes thought of misfortune
And arms himself against it in advance.`,
    lines: [
      `He brakes his wheels.
He gets his tail in the water.
No blame.`,
      `The woman loses the curtain of her carriage.
Do not run after it;
On the seventh day you will get it.`,
      `The Illustrious Ancestor
Disciplines the Devil's Country.
After three years he conquers it.
Inferior people must not be employed.`,
      `The finest clothes turn to rags.
Be careful all day long.`,
      `The neighbor in the east who slaughters an ox
Does not attain as much real happiness
As the neighbor in the west
With his small offering.`,
      `He gets his head in the water. Danger.`
    ]
  },
  {
    number: 64,
    pattern: 878787,
    symbol: `䷿`,
    name: {
      zh: `未濟`,
      en: `Before Completion`
    },
    judgment: `Before Completion. Success.
But if the little fox, after nearly completing the crossing,
Gets his tail in the water,
There is nothing that would further.`,
    image: `Fire over water:
The image of the condition before transition.
Thus the superior man is careful
In the differentiation of things,
So that each finds its place.`,
    lines: [
      `He gets his tail in the water.
Humiliating.`,
      `He brakes his wheels.
Perseverance brings good fortune.`,
      `Before completion, attack brings misfortune.
It furthers one to cross the great water.`,
      `Perseverance brings good fortune.
Remorse disappears.
Shock, thus to discipline the Devil's Country.
For three years, great realms are awarded.`,
      `Perseverance brings good fortune.
No remorse.
The light of the superior man is true.
Good fortune.`,
      `There is drinking of wine
In genuine confidence. No blame.
But if one wets his head,
He loses it, in truth.`
    ]
  }
];

module.exports = data;
