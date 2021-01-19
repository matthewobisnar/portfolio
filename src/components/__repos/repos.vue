<template>
    <div class="app__timeline">
        <div class="app__timeline-container">
            <div class="timeline">
              
                <div class="entry">
                    <div class="title">
                        <h2>Github Repository</h2>
                      </div>
                      <div class="body">
                        <div></div>
                      </div>
                </div>

                <div class="entry" v-for="repository in repositories" :key="repository.id">
                    <div class="title">
                        <h3>{{repository.title_h2}}</h3>
                        <p>{{repository.title_p}}</p>
                      </div>
                      <div class="body">
                        <div class="card">
                            <p>{{repository.body}}</p>
                        </div>
                      </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script src="./repos.js"></script>
<style scoped src="./repos.css"></style>