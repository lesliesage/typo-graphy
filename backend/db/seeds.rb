User.destroy_all
Test.destroy_all
Bookmark.destroy_all
Snippet.destroy_all
Language.destroy_all
HelpArticle.destroy_all

u1 = User.create(username: 'Leslie', email: 'leslie.sage@gmail.com', password_digest: 'p')
u2 = User.create(username: 'Meg', email: 'test@test.com', password_digest: 'p')

l1=Language.create(name: 'ruby')
l2=Language.create(name: 'javascript')
l3=Language.create(name: 'python')
l4=Language.create(name: 'regex')

s01=Snippet.create(code: 'arr.product(arr).reject { |a,b| a == b }.any? { |a,b| a + b == n }', annotation: 'Does stuff...', language: l1)
s02=Snippet.create(code: 'print z.has_key?(\'mike\'), " ", z.has_key?("jones"), "\n"', annotation: 'Does stuff...', language: l1)
s03=Snippet.create(code: 'foobar = foo.slice(0, half) + bar.slice(half, foo.length)', annotation: 'Does stuff...', language: l1)
s04=Snippet.create(code: '<div className=”thing”>', annotation: 'This snippet would be found in the "render" statement of a React component. Assume you\'ve iterated over an array of things in a "thingCollection" component and pass each as props to this "thing" component. This gist uses a ternary statement to render only the elements that do NOT have a property of flagged === false.', language: l2)
s05=Snippet.create(code: '{ props.thing.flagged ? null :', annotation: 'This snippet would be found in the "render" statement of a React component. Assume you\'ve iterated over an array of things in a "thingCollection" component and pass each as props to this "thing" component. This gist uses a ternary statement to render only the elements that do NOT have a property of flagged === false.', language: l2)
s06=Snippet.create(code: '<img src={props.thing.img_url} alt={props.thing.name} />', annotation: 'This snippet would be found in the "render" statement of a React component. Assume you\'ve iterated over an array of things in a "thingCollection" component and pass each as props to this "thing" component. This gist uses a ternary statement to render only the elements that do NOT have a property of flagged === false.', language: l2)
s07=Snippet.create(code: 'f, ax = plt.subplots(2,2, figsize=(12,6), sharex=True, sharey=True)', annotation: 'This snippet makes a dashboard...', language: l3)
s08=Snippet.create(code: 'mySalaryArray = salaries.select{|name,salary| salary > 7.0}', annotation: 'Does stuff...', language: l3)
s09=Snippet.create(code: '<([A-Z][A-Z0-9]*)\b[^>]*>(.*?)</\1>', annotation: 'This snippet will match the opening and closing pair of any HTML tag.', language: l4)
s10=Snippet.create(code: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$', annotation: 'This snippet will match a password that meets the criteria of having 6 to 12 characters, at least one uppercase letter, at least one lowercase letter, at least one digit, and at least one special character.', language: l4)

Bookmark.create(user: u1, snippet: s04)
Bookmark.create(user: u1, snippet: s05)
Bookmark.create(user: u1, snippet: s06)
Bookmark.create(user: u1, snippet: s09)
Bookmark.create(user: u1, snippet: s10)
Bookmark.create(user: u2, snippet: s07)
Bookmark.create(user: u2, snippet: s08)
Bookmark.create(user: u2, snippet: s09)
Bookmark.create(user: u2, snippet: s10)

HelpArticle.create(help_text: 'practice by going to typo-graphy, selecting a language, and clicking "start".', display_order: 10)
HelpArticle.create(help_text: 'see your progress using the stats menu. typo-graphy provides information about your speed per language, your improvement over time, and your speed with special characters (compared to alphabetical characters). see how you stack up against other users.', display_order: 20)
HelpArticle.create(help_text: 'bookmark snippets to practice with by clicking on the right star above any snippet in the typo-graphy page, or go to the my snippets menu to manage all your bookmarks.', display_order: 30)
HelpArticle.create(help_text: 'create and edit snippets by going to the my-snippets menu (when logged in). click on add snippet to create a new one, or click to edit an existing snippet in the my snippets section.', display_order: 40)
HelpArticle.create(help_text: 'your snippets will be only visible to you. while it would be nice to crowd-source more conent, typo-graphy chooses to guard against awful people sharing awful things.', display_order: 50)
HelpArticle.create(help_text: 'have a suggestion? reach out using the contact menu.', display_order: 60)

50.times {Test.create(
    user: User.all.sample,
    snippet: Snippet.all.sample,
    alpha: rand(2000..200000).to_f/1000,
    numeric: rand(4000..400000).to_f/1000,
    tilde: rand(5000..500000).to_f/1000,
    backtick: rand(5000..500000).to_f/1000,
    exclamation: rand(5000..500000).to_f/1000,
    at: rand(5000..500000).to_f/1000,
    octothorpe: rand(6000..600000).to_f/1000,
    dollar: rand(6000..600000).to_f/1000,
    percent: rand(5000..500000).to_f/1000,
    carrot: rand(6000..600000).to_f/1000,
    ampersand: rand(6000..600000).to_f/1000,
    star: rand(5000..500000).to_f/1000,
    open_paren: rand(5000..500000).to_f/1000,
    close_paren: rand(5000..500000).to_f/1000,
    long_dash: rand(6000..600000).to_f/1000,
    dash: rand(5000..500000).to_f/1000,
    plus: rand(5000..500000).to_f/1000,
    equals: rand(5000..500000).to_f/1000,
    open_curly: rand(5000..500000).to_f/1000,
    close_curly: rand(5000..500000).to_f/1000,
    open_bracket: rand(5000..500000).to_f/1000,
    close_bracket: rand(5000..500000).to_f/1000,
    pipe: rand(7000..700000).to_f/1000,
    backslash: rand(6000..600000).to_f/1000,
    colon: rand(5000..450000).to_f/1000,
    semicolon: rand(5000..450000).to_f/1000,
    doublequote: rand(5000..450000).to_f/1000,
    singlequote: rand(5000..450000).to_f/1000,
    open_angle: rand(5000..500000).to_f/1000,
    close_angle: rand(5000..500000).to_f/1000,
    comma: rand(5000..450000).to_f/1000,
    period: rand(5000..450000).to_f/1000,
    question: rand(5000..500000).to_f/1000,
    slash: rand(5000..500000).to_f/1000
)}