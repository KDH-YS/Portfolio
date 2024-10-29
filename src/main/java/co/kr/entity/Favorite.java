package co.kr.entity;

import lombok.Data;

@Data
public class Favorite {
    private int id;              // 즐겨찾기 고유 ID
    private int userId;          // 사용자 ID
    private String title;
    private String link;
    private String productId;
    private String category1;
}
