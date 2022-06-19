<template>
    <div>
        <!-- ---------------------------------------------------- -->

        <main id="main" class="pl-md-5 main">
            <div class="page-header">
                <h3>공지사항</h3>
            </div>
            <hr />
            <!-- max-width: 1080px -->
            <table class="table table-striped" style="">
                <thead>
                    <tr>
                        <th
                            scope="col"
                            class="mobile"
                            style="width: 55px; text-align: center"
                        >
                            번호
                        </th>
                        <th
                            scope="col"
                            class="mobile"
                            style="text-align: center"
                        >
                            제목
                        </th>
                        <th
                            scope="col"
                            class="mobile"
                            style="width: 80px; text-align: center"
                        >
                            작성자
                        </th>
                        <th
                            scope="col"
                            class="mobile"
                            style="width: 120px; text-align: center"
                        >
                            날짜
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th
                            scope="row"
                            class="mobile"
                            style="text-align: center"
                        >
                            5
                        </th>
                        <td>
                            <a href="#" style="color: #000000"
                                >오랜만입니다. 여러분, 즐겁게 소통해봅시다.</a
                            >
                        </td>
                        <td class="mobile" style="text-align: center">
                            강종구
                        </td>
                        <td class="mobile" style="text-align: center">
                            2018-01-05
                        </td>
                    </tr>
                    <tr>
                        <th
                            scope="row"
                            class="mobile"
                            style="text-align: center"
                        >
                            4
                        </th>
                        <td>
                            <a href="#" style="color: #000000"
                                >사랑합니다. 여러분, 즐겁게 소통해봅시다.</a
                            >
                        </td>
                        <td class="mobile" style="text-align: center">
                            이상욱
                        </td>
                        <td class="mobile" style="text-align: center">
                            2018-01-05
                        </td>
                    </tr>
                    <tr>
                        <th
                            scope="row"
                            class="mobile"
                            style="text-align: center"
                        >
                            3
                        </th>
                        <td>
                            <a href="#" style="color: #000000"
                                >안녕하세요. 여러분, 즐겁게 소통해봅시다.</a
                            >
                        </td>
                        <td class="mobile" style="text-align: center">
                            박한울
                        </td>
                        <td class="mobile" style="text-align: center">
                            2018-01-05
                        </td>
                    </tr>
                    <tr>
                        <th
                            class="mobile"
                            scope="row"
                            style="text-align: center"
                        >
                            2
                        </th>
                        <td>
                            <a href="#" style="color: #000000"
                                >반갑습니다. 여러분, 즐겁게 소통해봅시다.</a
                            >
                        </td>
                        <td class="mobile" style="text-align: center">
                            나동빈
                        </td>
                        <td class="mobile" style="text-align: center">
                            2018-01-04
                        </td>
                    </tr>
                    <tr>
                        <th
                            class="mobile"
                            scope="row"
                            style="text-align: center"
                        >
                            1
                        </th>
                        <td>
                            <a href="#" style="color: #000000"
                                >친하게 지내요. 여러분, 즐겁게 소통해봅시다.</a
                            >
                        </td>
                        <td class="mobile" style="text-align: center">
                            이태일
                        </td>
                        <td class="mobile" style="text-align: center">
                            2018-01-03
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="btnContainer">
                <router-link class="btn btn-primary m-1" to="/main/write"
                    >글쓰기</router-link
                >
            </div>
            <ul class="pagination">
                <li class="page-item disabled">
                    <span class="page-link">&laquo;</span>
                </li>
                <li class="page-item">
                    <a class="page-link mobile" href="#">1</a>
                </li>
                <li class="page-item active">
                    <span class="page-link mobile">2</span>
                </li>
                <li class="page-item">
                    <a class="page-link mobile" href="#">3</a>
                </li>
                <li class="page-item">
                    <a class="page-link mobile" href="#">4</a>
                </li>
                <li class="page-item">
                    <a class="page-link mobile" href="#">5</a>
                </li>
                <li class="page-item">
                    <a class="page-link mobile" href="#">6</a>
                </li>
                <li class="page-item">
                    <a class="page-link mobile" href="#">7</a>
                </li>
                <li class="page-item">
                    <a class="page-link mobile" href="#">8</a>
                </li>
                <li class="page-item">
                    <a class="page-link mobile" href="#">9</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">&raquo;</a>
                </li>
            </ul>
        </main>

        <router-link to="/main/veiw">view</router-link>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btnContainer {
    display: flex;
    justify-content: right;
}
.pagination {
    display: flex;
    justify-content: center;
}
</style>
