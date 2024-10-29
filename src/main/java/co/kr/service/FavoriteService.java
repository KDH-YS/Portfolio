package co.kr.service;

import java.util.List;
import org.springframework.stereotype.Service;
import co.kr.entity.Favorite;
import co.kr.mapper.FavoriteMapper;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FavoriteService {
    private final FavoriteMapper favoriteMapper;


    public void addFavorite(Favorite favorite) {
        // 즐겨찾기 존재 여부 확인
        int count = favoriteMapper.checkFavoriteExists(favorite);
        if (count == 0) { // 존재하지 않을 경우에만 추가
            favoriteMapper.insertFavorite(favorite);
        }
    }

    public List<Favorite> getFavorites(int userId) {
        return favoriteMapper.getFavoritesByUserId(userId);
    }
}
