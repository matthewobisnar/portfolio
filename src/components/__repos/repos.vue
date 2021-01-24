<template>
    <div id="app__timeline" class="app__timeline">
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

                <div class="entry list-entry" v-for="repository in GET_REPOSITORIES" :key="repository.id">
                    <div class="title list">
                        <h3>{{repository.language}}</h3>
                        <p>
                            <a href="#">
                                <small>Branch: {{repository.default_branch}}</small>
                            </a>    
                        </p>

                      </div>
                      <div class="body">
                        <div class="card">
                            <p><a :href="repository.clone_url">{{repository.name}}</a></p>
                        </div>
                      </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script src="./repos.js"></script>
<style scoped src="./repos.css"></style>