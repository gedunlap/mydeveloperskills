const devSkills = []

const render = () => {
    const ul = $("ul")
    ul.empty()
    devSkills.forEach((item, index) => {
        
        const li = $("<li>").text(item)

        li.on("click", () => {
            devSkills.splice(index, 1)
            render()
        })
        ul.append(li)
    })
}


const addSkill = () => {
    const input = $('input')
    const value = input.val()
    devSkills.push(value)
    render()
}

$("button").on("click", addSkill)
render()