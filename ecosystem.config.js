
module.exports = {

    apps: [

        {

            name: "landing.gadingtech.id", // ubah sesuai nama aplikasi yang dibuat

            script: "npx",

            // sesuaikan port yang telah diubah

            args: "serve -s -l 64046 build",

            interpreter: "none",

            watch: true,

            merge_logs: true,

            env: {

                "NODE_ENV": "production",

            }

        }

    ]

}