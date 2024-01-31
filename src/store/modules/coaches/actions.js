export default {
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId;
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };

        const response = await fetch(`https://vue-main-prj-aead4-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
            method: 'PUT', // Data is overwritten if it already exists or will be created if it doesn't exist
            body: JSON.stringify(coachData),
        });

        // const responseData = await response.json();

        if (!response.ok) {
            // error...
        }
        context.commit('registerCoach', {
            ...coachData,
            id: userId
        });
    }
}