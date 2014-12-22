public class Move {
    int length;
    boolean capture;
    int x;
    int y;
    int z;
	
	Move() {
	    x = 0;
	    y = 0;
	    z = 0;
	    capture = false;
	    length = 0;
	}

	Move(int l, boolean cap, int a) {
		this();
	    length = l;
	    capture = cap;
	    x = a;
	}

	Move(int l, boolean cap, int a, int b) {
		this(l, cap, a);
	    y = b;
	}

	Move(int l, boolean cap, int a, int b, int c) {
		this(l, cap, a, b);
	    z = c;
	}

}
