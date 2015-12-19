project(jMorris)

cmake_minimum_required(VERSION 2.8)

set (CMAKE_CXX_FLAGS "-std=c++11 -g -O3 -Werror -Wall -pthread")
enable_testing()

add_executable(jmorris.cgi
    response.cpp
    mill.cpp
    move.cpp
    node.cpp
    table.cpp
    )

target_link_libraries(jmorris.cgi
    cgicc
    )

add_executable(test_jmorris
    test.cpp
    mill.cpp
    move.cpp
    node.cpp
    table.cpp
    )

add_test(test_jmorris test_jmorris)
