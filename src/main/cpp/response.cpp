#include <iostream>
#include "cgicc/Cgicc.h"
#include "cgicc/HTTPPlainHeader.h"
#include "cgicc/HTMLClasses.h"
#include "rapidjson/document.h"
#include "mill.h"
#include "move.h"
#include "table.h"

using namespace std;
using namespace cgicc;

int main(int argc, char **argv) {
    int table[24];
    int white_hand = 9;
    int black_hand = 9;
    bool white_to_move = true;
    if (argc == 2) {
        //        string foo = argv[1];
        char foo[] = "{\"table\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"
            "\"white_hand\":9,\"black_hand\":9,\"white_to_move\":true}";
        rapidjson::Document d;
        d.Parse(foo);
        if (d.IsObject() &&
                d.HasMember("table") &&
                d["table"].IsArray() &&
                d["table"].Size() == 24 &&
                d.HasMember("white_hand") &&
                d["white_hand"].IsInt() &&
                d.HasMember("black_hand") &&
                d["black_hand"].IsInt() &&
                d.HasMember("white_to_move") &&
                d["white_to_move"].IsBool()) {
            cout << "ZOLI Bingo!!!" << endl;
            for (size_t i = 0; i < d["table"].Size(); i++) {
                const rapidjson::Value& field = d["table"][i];
                if (field.IsInt()) {
                    table[i] = field.GetInt();
                } else {
                    return 0;
                }
            }
            white_hand = d["white_hand"].GetInt();
            black_hand = d["black_hand"].GetInt();
            white_to_move = d["white_to_move"].GetBool();
        } else {
            return 0;
        }
    } else {
        Cgicc cgi;
        cout << HTTPPlainHeader();
        /*
           form_iterator p_from = cgi.getElement("from");
           form_iterator p_to = cgi.getElement("to");
           if (p_from != cgi.getElements().end() &&
           p_to != cgi.getElements().end()) {
           from_field = cgi("from");
           to_field = cgi("to");
           }
           */
    }
    Mill *mill = new Mill();
    mill->table->setPos(table, white_hand, black_hand, white_to_move);
    mill->n = 100;
    mill->setBestMoveMCTS();
    string bestMove = mill->bestMoveStr;
    delete mill;

    cout << "ZOLI " << bestMove << endl;
    return 0;
}
