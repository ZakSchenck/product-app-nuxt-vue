<template>
    <div>
        <h1>Shop iPhones</h1>
        <h3>Cutting edge technology.</h3>
        <p>Bigger, more powerful, and lightweight.</p>
        <NuxtLink to="/smartphones">
        <a>Shop  &nbsp;></a>
        </NuxtLink>
        <img src="../static/iphonetbg-removebg-preview.png">
    </div>
</template>
<script>
export default {
    name: "PhoneBanner",
    
}
</script>
<style lang="scss" scoped>
    div {
        display: flex;
        flex-direction: column;
        gap: 19px;
        align-items: center;
        background-color: #FBFBFD;
        margin-top: 25px;
        padding: 15px;
        h1 {
            font-size: 45px;
        }
        h3 {
            font-size: 25px;
            font-weight: 400;
        }
        p {
            font-size: 20px;
            color: gray;
        }
        a {
            color: #1d7be5;
            text-decoration: none;
            font-size: 22px;
            &:hover {
                text-decoration: underline;
            }
        }
        @media (max-width: 420px) {
            img {
                width: 96%;
                height: auto;
            }
        }
    }
</style>