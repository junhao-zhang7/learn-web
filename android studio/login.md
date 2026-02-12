<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    xmlns:app="http://schemas.android.com/apk/res-auto"

    >

    <ImageView
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:scaleType="centerCrop"
        android:src="@drawable/scene" />

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:layout_centerHorizontal="true"
        android:layout_marginTop="50dp"
        android:gravity="center">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="登录"
            android:textColor="@color/white"
            android:textSize="28dp"
            android:textStyle="bold">

        </TextView>
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="login"
            android:textColor="@color/white"
            android:textSize="20dp"
            android:textStyle="bold">

        </TextView>

    </LinearLayout>

    <LinearLayout
        android:id="@+id/shili"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentBottom="true"
        android:layout_marginStart="40dp"
        android:layout_marginEnd="40dp"
        android:layout_marginBottom="100dp"
        android:orientation="vertical">


        <RelativeLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_alignParentBottom="true"
            android:layout_marginStart="40dp"
            android:layout_marginEnd="40dp">

            <EditText
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:inputType="number"
                android:paddingLeft="50dp"
                android:text="123456"
                android:textColor="@color/white"
                android:textSize="17sp"
                android:theme="@style/wangsEdit">

            </EditText>

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginStart="5dp"
                android:layout_marginTop="10dp"
                android:text="账号"
                android:textColor="@color/white"
                android:textSize="18dp"
                android:textStyle="bold">

            </TextView>

        </RelativeLayout>

        <RelativeLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_alignParentBottom="true"
            android:layout_marginStart="40dp"
            android:layout_marginEnd="40dp"
            >

            <EditText
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:inputType="textPassword"
                android:paddingLeft="50dp"
                android:text="123456"
                android:textColor="@color/white"
                android:textSize="17sp"
                android:theme="@style/wangsEdit">

            </EditText>

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginStart="5dp"
                android:layout_marginTop="10dp"
                android:text="密码"
                android:textColor="@color/white"
                android:textSize="18dp"
                android:textStyle="bold">

            </TextView>

        </RelativeLayout>

        <RelativeLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginStart="40dp"
            android:layout_marginEnd="40dp"
            android:layout_alignParentBottom="true"
            >

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="忘记密码"
                android:textColor="@color/red">

            </TextView>

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_alignParentEnd="true"
                android:text="前往注册"
                android:textColor="@color/white">

            </TextView>
        </RelativeLayout>
        <androidx.cardview.widget.CardView
            android:layout_width="match_parent"
            android:layout_height="40dp"
            app:cardCornerRadius="20dp"
            android:layout_marginTop="20dp"
            >
            <RelativeLayout
                android:layout_width="match_parent"
                android:layout_height="match_parent">
                <androidx.cardview.widget.CardView
                    android:layout_width="match_parent"
                    android:layout_height="match_parent"
                   app:cardBackgroundColor="#e85319"
                    app:cardCornerRadius="20dp"
                    android:layout_margin="1dp">
                    <TextView
                        android:layout_width="match_parent"
                        android:layout_height="match_parent"
                        android:gravity="center"
                        android:text="立即登录"
                        android:textColor="@color/white">

                    </TextView>

                </androidx.cardview.widget.CardView>
            </RelativeLayout>
        </androidx.cardview.widget.CardView>



    </LinearLayout>
    <LinearLayout

        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentBottom="true"
        android:layout_marginStart="40dp"
        android:layout_marginEnd="100dp"
        android:layout_marginBottom="50dp"
        android:orientation="vertical"
        android:layout_centerHorizontal="true"
        >

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"

            android:text="残霞铺海赤如烧，远岫衔云意未消"
            android:textColor="@color/white">
        </TextView>
    </LinearLayout>

</RelativeLayout>