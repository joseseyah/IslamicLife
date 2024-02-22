
const reflections = [];

function addReflection(subject, description, userName) {
    const reflection = {
        id: reflections.length + 1,
        subject,
        description,
        userName,
        likes: 0,
    };
    reflections.push(reflection);
    return reflection;
}

function getReflections() {
    return reflections;
}

function likeReflection(reflectionId) {
    const reflection = reflections.find(ref => ref.id === reflectionId);
    if (reflection) {
        reflection.likes += 1;
        return reflection;
    }
    return null;
}

module.exports = {
    addReflection,
    getReflections,
    likeReflection,
};

