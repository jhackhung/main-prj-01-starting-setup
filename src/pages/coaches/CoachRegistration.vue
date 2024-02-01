<template>
    <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
        <p>{{ error }}</p>
    </base-dialog>
    <section>
        <base-card>
            <h2>Register as a coach now!</h2>
            <div v-if="isLoading">
                <base-spinner></base-spinner>
            </div>
            <coach-form @save-data="saveData"></coach-form>
        </base-card>
    </section>
</template>

<script>
import CoachForm from '@/components/coaches/CoachForm.vue'

export default {
    components: {
        CoachForm,
    },
    data() {
        return {
            isLoading: false,
            error: null,
        }
    },
    methods: {
        async saveData(formData) {
            this.isLoading = true;
            try {
                await this.$store.dispatch('coaches/registerCoach', formData);
            } catch (error) {
                this.error = error.message || 'Failed to register coach.';
            }
            if (!this.error) {
                this.$router.replace('/coaches'); // redirect to coaches page, and you can't go back to this page
            }
            this.isLoading = false;
        },
        handleError() {
            this.error = null;
        }
    }

}
</script>
